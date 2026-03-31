import Link from "next/link";

export default function SubcategoriesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Subcategories
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <Link
            href="/subcategories/1"
            className="flex items-center justify-center rounded-lg border border-gray-200 p-6 text-center hover:bg-gray-50 hover:shadow-sm"
          >
            <span className="text-sm font-medium text-gray-900">Mobile Phones</span>
          </Link>
          <Link
            href="/subcategories/2"
            className="flex items-center justify-center rounded-lg border border-gray-200 p-6 text-center hover:bg-gray-50 hover:shadow-sm"
          >
            <span className="text-sm font-medium text-gray-900">Laptops</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
