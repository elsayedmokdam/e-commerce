"use client";

import { Product } from "@/services/types/cart_interface";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import AppButton from "../app-button/AppButton";
import {
  removeFromCartAction,
  updateCartItemAction,
} from "../../../services/actions/cart.action";
import { useState } from "react";
import { notify } from "@/services/utils/helpers/alerts";
import formatPrice from "@/services/utils/helpers/formatPrice";
import formatTitle from "@/services/utils/helpers/formatTitle";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import {
  setCartItems,
  setNumOfCartItems,
} from "@/redux/store/slices/cartSlice/CartSlice";

export function CartItemCard({ product }: { product: Product }) {
  const {
    product: {
      title,
      imageCover,
      category: { name },
      id: productId,
    },
    price,
    count,
  } = product;

  const [isLoading, setIsLoading] = useState(false);

  const { numOfCartItems, cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  async function handleRemoveProduct(id: string) {
    setIsLoading(true);
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (!willDelete) return;

      const previousCart = cartItems;
      // Optimistic update(client Side)
      if (cartItems) {
        dispatch(
          setCartItems({
            ...cartItems,
            numOfCartItems: cartItems.numOfCartItems - 1,
            data: {
              ...cartItems.data,
              products: cartItems.data.products.filter(
                (item) => item.product._id !== id,
              ),
              totalCartPrice: cartItems.data.totalCartPrice - price * count,
            },
          }),
        );
      }
      // Handle the request on server
      removeFromCartAction(id).then((res) => {
        if (res.ok) {
          notify.success(res.data.message);
          dispatch(setNumOfCartItems(numOfCartItems - 1));
          dispatch(setCartItems(res.data));
        } else {
          notify.error(res.error.message);
          dispatch(setCartItems(previousCart));
        }
      });
      setIsLoading(false);
    });
  }

  function handleUpdateCount(id: string, count: number) {
    setIsLoading(true);
    if (count <= 0) {
      handleRemoveProduct(id);
      return;
    }

    // Save a copy for rollback
    const previousCart = cartItems ? structuredClone(cartItems) : null;

    // Optimistic update (client side)
    if (cartItems) {
      dispatch(
        setCartItems({
          ...cartItems,
          data: {
            ...cartItems.data,
            products: cartItems.data.products.map((item) =>
              item.product._id === id ? { ...item, count } : item,
            ),
            totalCartPrice:
              cartItems.data.totalCartPrice - price + price * count,
          },
        }),
      );
    }

    // Update on server
    updateCartItemAction(id, { count }).then((res) => {
      if (res.ok) {
        notify.success(res.data.message);

        dispatch(setCartItems(res.data));
        dispatch(setNumOfCartItems(res.data.numOfCartItems));
      } else {
        notify.error(res.error.message);

        if (previousCart) {
          dispatch(setCartItems(previousCart));
        }
      }

      setIsLoading(false);
    });
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <Link
          href={`/products/${productId}`}
          className="w-full h-70 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center"
        >
          <img
            src={imageCover}
            alt={title}
            className="w-full h-full object-cover rounded-xl border border-gray-100"
          />
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between gap-3">
          {/* Top */}
          <div>
            <Link
              href={`/products/${productId}`}
              className="font-semibold text-sm sm:text-base hover:text-green-700 transition"
            >
              {formatTitle(title, 30)}
            </Link>

            <p className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full w-fit mt-1">
              {name}
            </p>

            <p className="mt-2 text-sm">
              <span className="font-bold text-green-600">
                {formatPrice(price)} EGP
              </span>{" "}
              <span className="text-gray-400 text-xs">per unit</span>
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Quantity */}
            <div className="flex items-center gap-2">
              <AppButton
                onClick={() => handleUpdateCount(productId, count - 1)}
                loading={isLoading}
                className={`w-8 h-8 border rounded-md flex items-center justify-center bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100 disabled:opacity-50`}
              >
                <FiMinus size={14} />
              </AppButton>

              <span className="px-3 text-sm font-medium">{count}</span>

              <AppButton
                onClick={() => handleUpdateCount(productId, count + 1)}
                loading={isLoading}
                className={`w-8 h-8 bg-green-600 text-white rounded-md flex items-center justify-center hover:bg-green-700 disabled:opacity-50`}
              >
                <FiPlus size={14} />
              </AppButton>
            </div>

            {/* Price + Remove */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-400">Total</p>
                <p className="font-bold text-base sm:text-lg">
                  {formatPrice(price * count)} EGP
                </p>
              </div>

              <AppButton
                onClick={() => handleRemoveProduct(productId)}
                loading={isLoading}
                className={`p-2 text-red-500 bg-red-100 border-red-500 hover:bg-red-200 rounded-md disabled:opacity-50 ${isLoading ? "cursor-not-allowed!" : ""}`}
              >
                <FiTrash2 />
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
