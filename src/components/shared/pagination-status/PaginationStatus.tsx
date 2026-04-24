import { FaSpinner } from "react-icons/fa6";
import AppButton from "../app-button/AppButton";

interface PaginationStatusProps {
  hasMorePages: boolean;
  currentPageNum: number;
  totalPages: number;
  isLoading: boolean;
  hasError: boolean;
  handleLoadMore: () => void;
  itemsCount: number;
  errorMessage?: string;
}

export default function PaginationStatus({
  hasMorePages,
  currentPageNum,
  totalPages,
  isLoading,
  hasError,
  handleLoadMore,
  itemsCount,
  errorMessage,
}: PaginationStatusProps) {
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      {/* Error */}
      {hasError && (
        <p className="text-red-500 text-sm font-medium text-center">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      {/* Load More */}
      {hasMorePages && !hasError && (
        <AppButton
          onClick={handleLoadMore}
          disabled={isLoading}
          className="px-8 py-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Loading</span>
            </>
          ) : (
            <span>Load More</span>
          )}
        </AppButton>
      )}

      {/* End of list */}
      {!hasMorePages && itemsCount > 0 && (
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
            <span className="text-gray-500 text-lg">✓</span>
          </div>

          <p className="text-gray-600 text-sm font-medium">
            You’ve reached the end
          </p>

          <p className="text-gray-400 text-xs">No more items to display</p>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && itemsCount === 0 && !hasError && (
        <p className="text-gray-400 text-sm">No data available</p>
      )}

      {/* Pagination info */}
      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
        <span className="font-medium text-gray-700">Page {currentPageNum}</span>
        <span className="text-gray-400">/</span>
        <span>{totalPages}</span>
      </div>
    </div>
  );
}
