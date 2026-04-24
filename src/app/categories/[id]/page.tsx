import PageHeader from "@/components/shared/page-header/PageHeader";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { CategoryData } from "@/services/types/categories_interface";
import SubcategorysList from "./SubcategorysList";
import { Suspense } from "react";
import SubcategoryLoading from "./loading";

export default async function page({ params }: any) {
  const { id } = await params;

  // Fetch Specific Category to get its name and image
  const response = await $SERVICE_REPOSITORY.Categories.getSpecificCategory(id);
  if (!response.ok) {
    throw new Error(response.error.message);
  }

  const categoryData: CategoryData = response.data.data;

  // Fetch All SubCategories on a Category:
  async function SubCategoriesContent() {
    const response =
      await $SERVICE_REPOSITORY.Subcategories.getAllSubcategoriesOnCateg(id, {
        limit: "15",
        page: "1",
      });

    if (!response.ok) {
      throw new Error(response.error.message);
    }

    const subcategories: CategoryData[] = response.data.data;
    const currentPage = response.data.metadata.currentPage;
    const numberOfPages = response.data.metadata.numberOfPages;
    return (
      <SubcategorysList
        id={id}
        initialSubcategories={subcategories}
        currentPage={currentPage}
        totalPages={numberOfPages}
        categoryName={categoryData.name}
      />
    );
  }

  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={categoryData.image}
        title={categoryData.name}
        pageName={[
          { name: "Categories", href: "/categories" },
          { name: categoryData.name , href: `/categories/${id}` },
        ]}
        subtitle="Explore our complete subcategory collection"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <Suspense fallback={<SubcategoryLoading />}>
        <SubCategoriesContent />
      </Suspense>
    </>
  );
}
