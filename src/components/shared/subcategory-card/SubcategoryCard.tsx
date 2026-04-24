import { CategoryData } from "@/services/types/categories_interface";
import Link from "next/link";
import { FaArrowRightLong, FaFolderOpen } from "react-icons/fa6";

export default function CategoryCard({ subCategory }: { subCategory: CategoryData }) {
  return (
    <>
      <Link
        key={subCategory._id}
        href={`/subcategories/${subCategory._id}`}
        className="group"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3 bg-white shadow-sm rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
          {/* Category Image */}
          <div className="text-green-500 group-hover:text-green-500">
            <FaFolderOpen size={40} />
          </div>
          {/* Category Name */}
          <p className="text-center text-xs font-medium text-gray-700 transition-colors group-hover:text-main-color sm:text-sm md:text-base">
            {subCategory.name}
          </p>
          <p className="text-center text-xs font-medium text-main-color lg:opacity-0 group-hover:opacity-100 transition-colors duration-300 flex items-center gap-1">
            <span>Browse Products</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong size={12} />
            </span>
          </p>
        </div>
      </Link>
    </>
  );
}
