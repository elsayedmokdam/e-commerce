"use client";

import { useState } from "react";
import ProductCard from "@/components/shared/product-card/ProductCard";
import { ProductData } from "@/services/types/products_interface";
import { FiAlertCircle } from "react-icons/fi";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import AppButton from "@/components/shared/app-button/AppButton";
import { FaSpinner } from "react-icons/fa6";
import { notify } from "@/utilities/alerts";

interface ProductsListProps {
  initialProducts: ProductData[];
  totalPages: number;
  currentPage: number;
}

export function ProductsList({
  initialProducts,
  totalPages,
  currentPage,
}: ProductsListProps) {
  const [products, setProducts] = useState<ProductData[]>(initialProducts);
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      const nextPage = currentPageNum + 1;
      const response = await $SERVICE_REPOSITORY.Products.getProducts({
        limit: "15",
        page: nextPage.toString(),
      });

      if (response.data && response.data.length > 0) {
        setProducts((prev) => [...prev, ...response.data]);
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
        {!products || products.length === 0 ? (
          <div className="max-w-7xl mx-auto my-12 flex flex-col items-center justify-center py-20">
            <FiAlertCircle size={64} className="text-gray-300 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500 text-center font-medium max-w-md mb-6">
              We couldn't find any products at the moment. Please try again
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
              Showing {products.length} products.
            </p>
            {/* Product List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex flex-col items-center gap-4">
              {hasError && (
                <p className="text-red-500 text-sm font-medium">
                  Error loading more products. Please try again.
                </p>
              )}

              {hasMorePages && (
                <AppButton
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="px-8 py-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <span>
                        <FaSpinner className="animate-spin" />
                      </span>
                      <span>Loading</span>
                    </div>
                  ) : (
                    "Load More Products"
                  )}
                </AppButton>
              )}

              {!hasMorePages && products.length > 0 && (
                <p className="text-gray-500 text-center mt-4">
                  You've reached the end of our product list.
                </p>
              )}

              <p className="text-sm text-gray-400 mt-2">
                Page {currentPageNum} of {totalPages}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
