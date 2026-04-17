"use client";

import { FaBagShopping, FaLock, FaTag, FaTruck } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import AppButton from "../app-button/AppButton";
import Link from "next/link";

export function OrderSummary({
  totalPrice,
  totalItems,
  totalQuantity,
}: {
  totalPrice: number;
  totalItems: number;
  totalQuantity: number| undefined;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm sticky top-25 h-fit">
      {/* Header */}
      <div className="bg-linear-to-br from-[#00bb51] to-[#00BC7D] text-white rounded-lg p-4 mb-4 flex flex-col gap-3">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <span>
            <FaBagShopping size={20} />
          </span>
          <span>Order Summary</span>
        </h3>
        <p className="text-sm opacity-90 flex items-center gap-1">
          <span>{totalItems} </span>
          <span>items in your cart</span>
          <span>, </span> <span>{totalQuantity} </span> <span>quantity</span>
        </p>
      </div>

      {/* Free Shipping */}
      <div className="bg-green-50 p-3 rounded-lg mb-4 flex items-center gap-2">
        <div className="flex items-center justify-center p-2 rounded-full text-green-600 bg-green-100">
          <FaTruck size={30} className="" />
        </div>
        <div>
          <p className="font-semibold text-green-700">Free Shipping!</p>
          <p className="font-medium text-sm text-main-color">
            You qualify for free delivery
          </p>
        </div>
      </div>

      {/* Prices */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-800">{totalPrice} EGP</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600">FREE</span>
        </div>
      </div>

      <div className="border border-dashed border-gray-400 my-5"></div>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>{totalPrice} EGP</span>
      </div>

      {/* Promo */}
      <div className="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2 mb-4 text-gray-500 hover:bg-green-50 hover:text-main-color hover:border-main-color cursor-pointer">
        <FaTag />
        Apply Promo Code
      </div>

      {/* Button */}
      <AppButton className="w-full bg-linear-to-r from-[#00bb51] to-[#00BC7D] hover:bg-linear-to-br hover:from-[#00bb51] hover:to-[#00BC7D] text-white py-7 rounded-lg font-semibold text-md">
        <FaLock size={20} className="mr-1" />
        Secure Checkout
      </AppButton>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-4 flex flex-col gap-3">
        <p>Secure Payment • Fast Delivery</p>
        <Link
          href="/"
          className="mt-2 text-green-600 flex items-center gap-1 justify-center group"
        >
          <span className="group-hover:-translate-x-1 transition">
            <BsArrowLeft size={20} />
          </span>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}
