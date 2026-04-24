import { CategoryData } from "@/services/types/categories_interface";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CategoryCard({ category }: { category: CategoryData }) {
  return (
    <>
      <Link
        key={category._id}
        href={`/categories/${category._id}`}
        className="group"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3 bg-white shadow-sm rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg border border-gray-200">
          {/* Category Image */}
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 group-hover:shadow-lg group-hover:scale-105`}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={100}
              height={100}
              className="h-full w-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Category Name */}
          <p className="text-center text-xs font-medium text-gray-700 transition-colors group-hover:text-main-color sm:text-sm md:text-base">
            {category.name}
          </p>

          <p className="text-center text-xs font-medium text-main-color lg:opacity-0 group-hover:opacity-100 transition-colors duration-300 flex items-center gap-1">
            <span>View Subcategories</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong size={12} />
            </span>
          </p>
        </div>
      </Link>
    </>
  );
}
