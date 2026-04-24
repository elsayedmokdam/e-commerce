import PageHeader from "@/components/shared/page-header/PageHeader";
import { Suspense } from "react";
import { FaTags } from "react-icons/fa6";
import BrandsLoading from "./loading";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { BrandsData } from "@/services/types/brands_interface";
import BrandsList from "./BrandsList";

export default function page() {
  // Fetch all products
    async function BrandsContent() {
      const response = await $SERVICE_REPOSITORY.Brands.getAllBrands({
        limit: "15",
        page: "1",
      });
  
      if (!response.ok) {
        throw new Error(response.error.message);
      }
  
      const brands: BrandsData[] = response.data.data;
      const currentPage = response.data.metadata.currentPage;
      const numberOfPages = response.data.metadata.numberOfPages;
  
      return (
        <BrandsList
          initialBrands={brands}
          currentPage={currentPage}
          totalPages={numberOfPages}
        />
      );
    }
  return (
    <>
      <PageHeader
        title="Top Brands"
        pageName={[{ name: "Brands", href: "/brands" }]}
        subtitle="Shop from your favorite brands and discover new ones"
        bgColor="bg-linear-to-br from-[#7F22FE] via-[#8E51FF] to-[#C27AFF] "
        icon={<FaTags />}
        iconBgColor="bg-[#8E51FF]"
      />

      <Suspense fallback={<BrandsLoading />}>
        <BrandsContent />
      </Suspense>
    </>
  );
}
