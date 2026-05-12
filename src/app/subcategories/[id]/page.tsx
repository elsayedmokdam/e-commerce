import PageHeader from "@/components/shared/page-header/PageHeader";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { Suspense } from "react";
import { ProductData } from "@/services/types/products_interface";
import ProductsList from "@/app/products/ProductsList";
import ProductsLoading from "@/app/products/loading";
import icon from "@public/allProductsIcon.svg";

export default async function page({ params }: any) {
  const { id } = await params;

  // Fetch wishlist
  const wishlistResponse = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  let wishlistIds: string[] = [];

  if (wishlistResponse.ok) {
    wishlistIds = wishlistResponse.data.data.map(
      (item: ProductData) => item._id,
    );
  }

  // Fetch All products on a Category:
  async function SubCategoriesContent() {
    const response = await $SERVICE_REPOSITORY.Products.getProducts({
      limit: "15",
      page: "1",
      category: id,
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
      {/* Header of the page */}
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={icon.src}
        title="All Products"
        pageName={[{ name: "Products", href: "/products" }]}
        subtitle="Explore our complete product collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <Suspense fallback={<ProductsLoading />}>
        <SubCategoriesContent />
      </Suspense>
    </>
  );
}
