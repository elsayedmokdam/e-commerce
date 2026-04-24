import { BrandsData } from "@/services/types/brands_interface";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BrandCard(brand: { brand: BrandsData }) {
  return (
    <>
      <Link
        key={brand.brand._id}
        href={`/brands/${brand.brand._id}`}
        className="group"
      >
        <div className="flex flex-col items-center gap-2 md:gap-3 bg-white shadow-sm rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg border border-gray-200">
          {/* Brand Image */}
          <div
            className={`flex items-center justify-center rounded-lg transition-all duration-300 size-20 md:size-26 lg:size-30 xl:size-40 relative group-hover:scale-105`}
          >
            <Image
              src={brand.brand.image}
              alt={brand.brand.name}
              fill
              className="h-full w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Brand Name */}
          <p className="text-center text-xs font-medium text-gray-700 transition-colors group-hover:text-main-color sm:text-sm md:text-base">
            {brand.brand.name}
          </p>

          <p className="text-center text-xs font-medium text-main-color lg:opacity-0 group-hover:opacity-100 transition-colors duration-300 flex items-center gap-1">
            <span>View Products</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong size={12} />
            </span>
          </p>
        </div>
      </Link>
    </>
  );
}
