import { Suspense } from "react";
import PageHeader from "@/components/shared/page-header/PageHeader";
import icon from "@public/allProductsIcon.svg";
import ProductsLoading from "./loading";
import CategoriesList from "./CategoriesList";


export default function page() {
  return (
    <>
      {/* Header of the page */}
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={icon.src}
        title="All Categories"
        pageName="Categories"
        subtitle="Explore our complete category collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      {/* Lazy Loading */}
      <Suspense fallback={<ProductsLoading />}>
        <CategoriesList />
      </Suspense>
    </>
  );
}
