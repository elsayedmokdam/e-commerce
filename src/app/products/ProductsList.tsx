"use client";

import { useState } from "react";
import ProductCard from "@/components/shared/product-card/ProductCard";
import { ProductData } from "@/services/types/products_interface";
import { FiAlertCircle } from "react-icons/fi";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { notify } from "@/services/utils/helpers/alerts";
import Link from "next/link";
import PaginationStatus from "@/components/shared/pagination-status/PaginationStatus";
import IsEmpty from "@/components/shared/is-empty/IsEmpty";

interface ProductsListProps {
  initialProducts: ProductData[];
  totalPages: number;
  currentPage: number;
  wishlistIds: string[];
}

export function ProductsList({
  initialProducts,
  totalPages,
  currentPage,
  wishlistIds,
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

      if (response.ok && response.data.data && response.data.data.length > 0) {
        setProducts((prev) => [...prev, ...response.data.data]);
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
    <div className="min-h-[60vh] py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {!products || products.length === 0 ? (
          <IsEmpty
            icon={
              <FiAlertCircle size={56} className="text-slate-400 stroke-1" />
            }
            title="No products found"
            description="We couldn't find any products at the moment. Please try again later or explore our other categories."
            links={[{ label: "Back to Home", href: "/" }]}
          />
        ) : (
          <div className="space-y-8">
            {/* Header / Subtitle Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-200/80">
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                Showing{" "}
                <span className="font-semibold text-slate-900">
                  {products.length}
                </span>{" "}
                products
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  wishlistIds={wishlistIds}
                />
              ))}
            </div>

            {/* Pagination Section */}
            <div className="pt-6">
              <PaginationStatus
                hasMorePages={hasMorePages}
                currentPageNum={currentPageNum}
                totalPages={totalPages}
                isLoading={isLoading}
                hasError={hasError}
                handleLoadMore={handleLoadMore}
                itemsCount={products.length}
                errorMessage="Failed to load more products. Please try again."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
