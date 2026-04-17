import { ProductData } from "@/services/types/products_interface";
import Image from "next/image";
import AppButton from "../app-button/AppButton";
import { FiEye, FiHeart, FiRefreshCw, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import AddToCartBtn from "./AddToCartBtn";

// Function to format the title
function formatTitle(title: string) {
  const maxLength = 30; // Maximum characters before truncation
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

export default function ProductCard({ product }: { product: ProductData }) {
  return (
    <div className="group bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden ">
      <Link
        href={`/products/${product.id}`}
        key={product.id}
        className="flex flex-col"
      >
        {/* Product Image Container */}
        <div className="relative rounded-t-lg overflow-hidden bg-gray-50 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
          {/* Discount Badge */}
          {product.priceAfterDiscount &&
            product.priceAfterDiscount < product.price && (
              <div className="absolute top-5 left-5 bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm font-semibold z-10">
                -{" "}
                {Math.round(
                  ((product.price - product.priceAfterDiscount) /
                    product.price) *
                    100,
                )}
                %
              </div>
            )}

          {/* Product Image */}
          <Image
            src={product.imageCover}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain group-hover:scale-120 transition-transform duration-300 rounded-t-4xl"
          />

          {/* Action Icons */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="space-y-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <AppButton className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 transition-colors cursor-pointer">
                <FiHeart size={18} className="text-gray-800" />
              </AppButton>
              <Link
                href={`/products/${product.id}`}
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FiEye size={18} className="text-gray-800" />
              </Link>
              <AppButton className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 transition-colors cursor-pointer">
                <FiRefreshCw size={18} className="text-gray-800" />
              </AppButton>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 md:p-4 grow flex flex-col justify-between">
          {/* Category */}
          <p className="text-xs md:text-sm text-gray-500 mb-1">
            {product.category.name}
          </p>

          {/* Product Name */}
          <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 mb-2 md:mb-3">
            {formatTitle(product.title)}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  size={14}
                  className={
                    index < Math.round(product.ratingsAverage)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-600">
              {product.ratingsAverage.toFixed(1)} ({product.ratingsQuantity})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-base md:text-lg font-bold text-main-color">
              {product.priceAfterDiscount
                ? product.priceAfterDiscount
                : product.price}{" "}
              EGP
            </span>
            {product.priceAfterDiscount &&
              product.priceAfterDiscount < product.price && (
                <span className="text-xs font-medium text-red-500 line-through">
                  {product.price} EGP
                </span>
              )}
          </div>
        </div>
      </Link>
      
      <div className="p-3 md:p-4">
        {/* Add to Cart */}
        <AddToCartBtn key={product.id} productId={product.id} />
      </div>
    </div>
  );
}
