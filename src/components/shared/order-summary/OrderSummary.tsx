import {
  FaBagShopping,
  FaLock,
  FaMoneyBill,
  FaSpinner,
  FaTag,
  FaTruck,
} from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import Link from "next/link";
import formatTitle from "@/services/utils/helpers/formatTitle";
import AppButton from "../app-button/AppButton";
import formatPrice from "@/services/utils/helpers/formatPrice";
import { OrderSummaryProps } from "@/services/types/order_interface";

export function OrderSummary({
  totalPrice,
  totalItems,
  totalQuantity,
  products,
  onCash,
  onOnline,
  loadingType,
}: OrderSummaryProps) {
  return (
    <div className="w-full flex flex-col border border-gray-200 rounded-xl overflow-hidden sticky top-25 h-fit">
      {/* Header */}
      <div className="bg-linear-to-br from-[#00bb51] to-[#00BC7D] text-white p-6 flex flex-col gap-3">
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
      <div className="bg-white rounded-b-lg py-4">
        {products ? (
          <div
            className={`${products.length > 1 ? "h-70 overflow-y-auto space-y-2" : ""} mb-4 ps-4`}
          >
            {products.map((product) => (
              <div
                key={product.product._id}
                className="bg-gray-100 border border-gray-200 hover:bg-gray-200 p-3 rounded-xl flex items-center justify-between mr-3"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 h-16 w-16 rounded-md bg-white border border-gray-200 flex items-center justify-center">
                    <img
                      src={product.product.imageCover}
                      alt={product.product.title}
                      className="object-contain h-full rounded-md"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm text-gray-800">
                      {formatTitle(product.product.title, 20)}
                    </h2>
                    <p className="font-medium text-xs text-gray-600">
                      {product.count} x {formatPrice(product.price)} EGP
                    </p>
                  </div>
                </div>
                <h2 className="font-semibold text-sm text-gray-800">
                  {product.price * product.count}
                </h2>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-green-50 p-3 rounded-lg mb-4 flex items-center gap-2 mx-4">
            <div className="flex items-center justify-center p-2 rounded-full text-green-600 bg-green-100">
              <FaTruck size={30} />
            </div>
            <div>
              <p className="font-semibold text-green-700">Free Shipping!</p>
              <p className="font-medium text-sm text-main-color">
                You qualify for free delivery
              </p>
            </div>
          </div>
        )}

        {/* Prices */}
        <div className="space-y-2 mb-4 px-6">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold text-main-color">
              {formatPrice(totalPrice)}{" "}
              <span className="text-xs text-gray-800 font-normal">EGP</span>
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="text-green-600">FREE</span>
          </div>
        </div>

        <div className="border border-dashed border-gray-400 my-5"></div>

        <div className="flex justify-between font-bold text-lg mb-4 px-4">
          <span>Total</span>
          <span className="text-main-color">
            {formatPrice(totalPrice)}{" "}
            <span className="text-xs text-gray-800 font-normal">EGP</span>
          </span>
        </div>

        {/* Promo */}
        <div className="border border-dashed border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2 mb-4 text-gray-500 hover:bg-green-50 hover:text-main-color hover:border-main-color cursor-pointer transition-colors duration-300 mx-6">
          <FaTag />
          Apply Promo Code
        </div>

        <div className="px-6">
          {products ? (
            <div className="flex flex-col gap-2">
              <AppButton
                type="button"
                disabled={totalItems === 0 || loadingType !== null}
                onClick={onCash}
                className="bg-linear-to-r from-[#00bb51] via-[#00BC7D] to-[#00bb51] hover:bg-linear-to-br hover:from-[#00bb51] hover:to-[#00BC7D] rounded-lg py-6 flex items-center gap-2"
              >
                <span>
                  <FaMoneyBill size={20} />
                </span>
                {loadingType === "cash" ? (
                  <span className="flex items-center gap-2">
                    <span>Creating Order</span>
                    <span>
                      <FaSpinner size={20} className="animate-spin" />
                    </span>
                  </span>
                ) : (
                  <span>Cash on Delivery</span>
                )}
              </AppButton>
              <AppButton
                type="button"
                disabled={totalItems === 0 || loadingType !== null}
                onClick={onOnline}
                className="bg-linear-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:bg-linear-to-br hover:from-[#833ab4] hover:to-[#fcb045] rounded-lg py-6 flex items-center gap-2"
              >
                <span>
                  <CiCreditCard1 size={20} />
                </span>
                {loadingType === "online" ? (
                  <span className="flex items-center gap-2">
                    <span>Creating Order</span>
                    <span>
                      <FaSpinner size={20} className="animate-spin" />
                    </span>
                  </span>
                ) : (
                  <span>Pay Online</span>
                )}
              </AppButton>
            </div>
          ) : (
            <Link
              href="/checkout"
              className="w-full bg-linear-to-r from-[#00bb51] to-[#00BC7D] hover:bg-linear-to-br hover:from-[#00bb51] hover:to-[#00BC7D] text-white py-5 rounded-lg font-semibold text-md flex items-center justify-center gap-2"
            >
              <FaLock size={20} />
              Secure Checkout
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-4 flex flex-col gap-3 px-6">
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
    </div>
  );
}
