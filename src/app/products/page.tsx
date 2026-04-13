import { Suspense } from "react";
import PageHeader from "@/components/shared/page-header/PageHeader";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { ProductData } from "@/services/types/products_interface";
import icon from "@public/allProductsIcon.svg";
import ProductsLoading from "./loading";
import ProductsList from "./ProductsList";

// Fetch all products
async function ProductsContent() {
  const response = await $SERVICE_REPOSITORY.Products.getProducts({
    limit: "15",
    page: "1",
  });
  const products: ProductData[] = response.data;
  const currentPage = response.metadata.currentPage;
  const numberOfPages = response.metadata.numberOfPages;

  return (
    <ProductsList
      initialProducts={products}
      currentPage={currentPage}
      totalPages={numberOfPages}
    />
  );
}

// export const dynamic = 'force-dynamic';

export default function page() {
  return (
    <>
      {/* Header of the page */}
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={icon.src}
        title="All Products"
        pageName="Products"
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
