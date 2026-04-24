"use client";

import BrandCard from "@/components/shared/brand-card/BrandCard";
import PaginationStatus from "@/components/shared/pagination-status/PaginationStatus";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { BrandsData } from "@/services/types/brands_interface";
import { notify } from "@/services/utils/helpers/alerts";
import Link from "next/link";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

interface BrandsListProps {
  initialBrands: BrandsData[];
  totalPages: number;
  currentPage: number;
}

export function BrandsList({
  initialBrands,
  totalPages,
  currentPage,
}: BrandsListProps) {
  const [brands, setBrands] = useState<BrandsData[]>(initialBrands);
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      const nextPage = currentPageNum + 1;
      const response = await $SERVICE_REPOSITORY.Brands.getAllBrands({
        limit: "15",
        page: nextPage.toString(),
      });

      if (response.ok && response.data.data && response.data.data.length > 0) {
        setBrands((prev) => [...prev, ...response.data.data]);
        setCurrentPageNum(nextPage);
      }
    } catch (error) {
      notify.error("Failed to load more products. Please try again.");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMorePages = currentPageNum < totalPages;

  return (
    <div className="min-h-[60vh] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!brands || brands.length === 0 ? (
          <div className="max-w-7xl mx-auto my-12 flex flex-col items-center justify-center py-20">
            <FiAlertCircle size={64} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No Brands Found
            </h3>
            <p className="text-gray-500 text-center font-medium max-w-md mb-6">
              We couldn't find any Brands at the moment. Please try again later
              or explore our other categories.
            </p>
            <Link
              href="/"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-gray-500 text-md font-medium text-center lg:text-start mb-6">
              Showing {brands.length} Brands.
            </p>
            {/* Product List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <BrandCard key={brand._id} brand={brand} />
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
              itemsCount={brands.length}
              errorMessage="Failed to load more Brands. Please try again."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BrandsList;
