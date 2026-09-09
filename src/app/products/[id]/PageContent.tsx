"use client";
import { FaShieldAlt, FaStar, FaUndo } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import ImagesSlider from "@/components/product-details-components/images-slider/ImagesSlider";
import { ProductData } from "@/services/types/products_interface";
import formatPrice from "@/services/utils/helpers/formatPrice";
import AddToCartBtn from "@/components/shared/product-card/AddToCartBtn";
import FeatureCard from "@/components/shared/feature-card/FeatureCard";
import WishlistToggleBtn from "@/components/shared/product-card/WishlistToggleBtn";
import { useState } from "react";
import AppButton from "@/components/shared/app-button/AppButton";
import AppInput from "@/components/shared/app-input/AppInput";

const featuredCards = [
  {
    icon: <FaTruck className="text-green-500" />,
    title: "Free Delivery",
    subtitle: "Orders over $50",
    iconBg: "bg-green-100",
  },
  {
    icon: <FaShieldAlt className="text-green-500" />,
    title: "Secure Payment",
    subtitle: "100% secure transactions",
    iconBg: "bg-green-100",
  },
  {
    icon: <FaUndo className="text-green-500" />,
    title: "30-day return policy",
    subtitle: "Money back",
    iconBg: "bg-green-100",
  },
];

export default function PageContent({
  productData,
  wishlistIds,
}: {
  productData: ProductData;
  wishlistIds: string[];
}) {
  const hasDiscount =
    productData.price > 0 &&
    productData.priceAfterDiscount !== 0 &&
    productData.priceAfterDiscount !== undefined &&
    productData.priceAfterDiscount < productData.price;

  const discountPercentage =
    hasDiscount && productData.priceAfterDiscount
      ? Math.round(
          ((productData.price - productData.priceAfterDiscount) /
            productData.price) *
            100,
        )
      : 0;

  const isInWishlist = wishlistIds.includes(productData.id);

  const [quantity, setQuantity] = useState(1);
  function handleQuantityChange(quantity: number) {
    if (quantity > 0) {
      setQuantity(quantity);
    }
    if(quantity > productData.quantity) {
      setQuantity(productData.quantity);
    }
  }

  return (
    <div className="bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* LEFT - IMAGE SLIDER */}
          <div className="bg-white h-fit rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-sm shadow-gray-200 lg:col-span-1 sticky top-25">
            <ImagesSlider images={productData.images} />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col gap-4 lg:col-span-2 bg-white rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 shadow-sm shadow-gray-200">
            {/* Category + Brand */}
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                {productData.category.name}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {productData.brand.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">
              {productData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    size={14}
                    className={
                      index < Math.round(productData.ratingsAverage)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm text-gray-600">
                {productData.ratingsAverage.toFixed(1)} (
                {productData.ratingsQuantity})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {productData.price} EGP
              </span>
              {hasDiscount && (
                <span className="line-through text-gray-600 text-sm">
                  {productData.price} EGP
                </span>
              )}
              {hasDiscount && (
                <span className="text-green-600 text-sm">
                  -{discountPercentage}%
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className=" text-sm font-medium">
                {productData.quantity > 0 ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </span>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm">{productData.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Quantity</span>

              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <AppButton
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity === 1}
                  className="px-4 py-2 text-gray-600 disabled:opacity-50 bg-transparent hover:bg-gray-100 rounded-md"
                >
                  -
                </AppButton>

                <div className="border-l border-r border-gray-200">
                  <AppInput
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(+e.target.value)}
                    className="border-0 text-center focus:ring-0! rounded-none w-19!"
                  />
                </div>

                <AppButton
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity === productData.quantity}
                  className="px-4 py-2 text-gray-600 disabled:opacity-50! bg-transparent hover:bg-gray-100 rounded-md"
                >
                  +
                </AppButton>
              </div>

              <span className="text-sm text-gray-400">
                {productData.quantity - quantity} available
              </span>
            </div>

            {/* Total */}
            <div className="bg-gray-100 rounded-lg px-4 py-3 flex justify-between items-center">
              <span className="text-gray-600">Total Price:</span>
              <span className="text-green-600 font-bold text-lg">
                {formatPrice(productData.price * quantity)} EGP
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              <div className="flex-1">
                <AddToCartBtn productId={productData.id} />
              </div>
            </div>

            {/* Wishlist */}
            <div>
              <WishlistToggleBtn
                productId={productData.id}
                initialState={isInWishlist}
                className="gap-2 rounded-lg px-4 py-3 border transition bg-transparent hover:bg-transparent border-gray-200 text-gray-600"
              />
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* Features */}
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredCards.map((card, index) => (
                  <FeatureCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                    iconBg={card.iconBg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
