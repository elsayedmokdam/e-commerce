"use client";

import { use } from "react";

export default function SubcategoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Subcategory {id}
        </h1>
        <p className="mt-4 text-gray-500">
          Browsing products in this specific subcategory.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="/products/1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Laptop Pro
                  </a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
