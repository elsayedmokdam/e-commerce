import PageHeader from "@/components/shared/page-header/PageHeader";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { BrandsData } from "@/services/types/brands_interface";
import { Suspense } from "react";
import BrandsLoading from "../loading";
import { ProductData } from "@/services/types/products_interface";
import ProductsList from "@/app/products/ProductsList";

export default async function page({ params }: any) {
  const { id } = await params;

  // Fetch wishlist
  const wishlistResponse = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  let wishlistIds: string[] = [];
  console.log("Wishlist Response", wishlistResponse);

  if (wishlistResponse.ok) {
    wishlistIds = wishlistResponse.data.data.map(
      (item: ProductData) => item._id,
    );
  }

  // Fetch Specific Brand to get its name and image
  const response = await $SERVICE_REPOSITORY.Brands.getSpecificBrand(id);
  if (!response.ok) {
    throw new Error(response.error.message);
  }

  const brandData: BrandsData = response.data.data;

  // Fetch All SubCategories on a Category:
  async function BrandsContent() {
    const response = await $SERVICE_REPOSITORY.Products.getProducts({
      limit: "15",
      page: "1",
      brand: id,
    });

    if (!response.ok) {
      throw new Error(response.error.message);
    }

    const products: ProductData[] = response.data.data;
    const currentPage = response.data.metadata.currentPage;
    const numberOfPages = response.data.metadata.numberOfPages;
    return (
      <ProductsList
        initialProducts={products}
        currentPage={currentPage}
        totalPages={numberOfPages}
        wishlistIds={wishlistIds}
      />
    );
  }

  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={brandData.image}
        title={brandData.name}
        pageName={[
          { name: "Brands", href: "/brands" },
          { name: brandData.name, href: `/brands/${id}` },
        ]}
        subtitle="Explore our complete subcategory collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <Suspense fallback={<BrandsLoading />}>
        <BrandsContent />
      </Suspense>
    </>
  );
}
