import { Suspense } from "react";
import PageHeader from "@/components/shared/page-header/PageHeader";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { ProductData } from "@/services/types/products_interface";
import icon from "@public/allProductsIcon.svg";
import ProductsLoading from "./loading";
import ProductsList from "./ProductsList";

export const dynamic = "force-dynamic";

export default async function page() {
  // Fetch wishlist
  const wishlistResponse = await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  let wishlistIds: string[] = [];

  if (wishlistResponse.ok) {
    wishlistIds = wishlistResponse.data.data.map(
      (item: ProductData) => item._id,
    );
  }

  // Fetch all products
  async function ProductsContent() {
    const response = await $SERVICE_REPOSITORY.Products.getProducts({
      limit: "15",
      page: "1",
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

      {/* Lazy Loading */}
      <Suspense fallback={<ProductsLoading />}>
        <ProductsContent />
      </Suspense>
    </>
  );
}
