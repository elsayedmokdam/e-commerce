import CategoryCard from "@/components/shared/category-card/CategoryCard";
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
  const categories: CategoryData[] = categoriesResponse.data;
  return (
    <section className="min-h-[60vh] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!categories || categories.length === 0 ? (
          <div className="my-12 flex flex-col items-center justify-center py-20">
            <FiAlertCircle size={64} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No Categories Found
            </h3>
            <p className="text-gray-500 text-center font-medium max-w-md mb-6">
              We couldn't find any categories at the moment. Please try again
              later or explore our other categories.
            </p>
            <a
              href="/"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Back to Home
            </a>
          </div>
        ) : (
          <div>
            <p className="text-gray-500 text-md font-medium text-center lg:text-start mb-6">
              Showing {categories.length} categories.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 md:mb-12 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



