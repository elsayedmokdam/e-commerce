"use client";
import IsEmpty from "@/components/shared/is-empty/IsEmpty";
import PaginationStatus from "@/components/shared/pagination-status/PaginationStatus";
import SubcategoryCard from "@/components/shared/subcategory-card/SubcategoryCard";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { CategoryData } from "@/services/types/categories_interface";
import { notify } from "@/services/utils/helpers/alerts";
import Link from "next/link";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

interface SubcategoryListProps {
  id: string;
  initialSubcategories: CategoryData[];
  totalPages: number;
  currentPage: number;
  categoryName: string;
}

export default function SubcategorysList({
  id,
  initialSubcategories,
  totalPages,
  currentPage,
  categoryName,
}: SubcategoryListProps) {
  const [subcategories, setSubcategories] =
    useState<CategoryData[]>(initialSubcategories);
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      const nextPage = currentPageNum + 1;
      const response =
        await $SERVICE_REPOSITORY.Subcategories.getAllSubcategoriesOnCateg(id, {
          limit: "15",
          page: nextPage.toString(),
        });

      if (response.ok && response.data.data && response.data.data.length > 0) {
        setSubcategories((prev) => [...prev, ...response.data.data]);
        setCurrentPageNum(nextPage);
      }
    } catch (error) {
      notify.error("Failed to load more products. Please try again.");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMorePages = totalPages > currentPageNum;
  return (
    <div className="min-h-[60vh] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {subcategories.length === 0 ? (
          <IsEmpty
            icon={<FiAlertCircle size={64} className="text-gray-300 " />}
            title="No Subcategories Found"
            description="We couldn't find any products at the moment. Please try again later or explore our other categories."
            links={[{ label: "Back to Categories", href: "/categories" }]}
          />
        ) : (
          <div>
            <p className="text-gray-500 text-md font-medium text-center lg:text-start mb-6">
              {subcategories.length} subcategories in {categoryName}
            </p>
            {/* Product List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {subcategories.map((subcategory) => (
                <SubcategoryCard
                  key={subcategory._id}
                  subCategory={subcategory}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <PaginationStatus
              hasMorePages={hasMorePages}
              currentPageNum={currentPageNum}
              totalPages={totalPages}
              isLoading={isLoading}
              hasError={hasError}
              handleLoadMore={handleLoadMore}
              itemsCount={subcategories.length}
              errorMessage="Failed to load more subcategories. Please try again."
            />
          </div>
        )}
      </div>
    </div>
  );
}
