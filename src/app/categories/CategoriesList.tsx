import CategoryCard from "@/components/shared/category-card/CategoryCard";
import IsEmpty from "@/components/shared/is-empty/IsEmpty";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { CategoryData } from "@/services/types/categories_interface";
import { FiAlertCircle } from "react-icons/fi";

export default async function CategoriesList() {
  // Fetch All Categories
  const categoriesResponse = await $SERVICE_REPOSITORY.Categories.getCategories(
    {
      limit: "15",
      page: "1",
    },
  );

  if (!categoriesResponse.ok) {
    throw new Error(categoriesResponse.error.message);
  }

  const categories: CategoryData[] = categoriesResponse.data.data;
  return (
    <section className="min-h-[60vh] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {categories.length === 0  ? (
          <IsEmpty
            icon={<FiAlertCircle size={64} className="text-gray-300" />}
            title="No categories found."
            description="We couldn't find any categories. Please try again later."
            links={[
              {
                label: "Back to Home",
                href: "/",
              },
            ]}
          />
        ) : (
          <div>
            <p className="text-gray-500 text-md font-medium text-center lg:text-start mb-6">
              Showing {categories.length} categories.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 md:mb-12 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-6">
              {categories?.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
