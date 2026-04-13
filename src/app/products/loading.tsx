"use client";

import { FaSpinner } from "react-icons/fa";

export default function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto my-7 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <p className="text-gray-400 text-md font-medium flex items-center gap-2 text-center lg:text-start">
        <span>Loading products...</span>
        <span>
          <FaSpinner className="animate-spin" />
        </span>
      </p>

      {/* Product Grid Skeleton */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg h-64 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

