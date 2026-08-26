"use client";

import { useState, ReactNode } from "react";
import AppButton from "../app-button/AppButton";
import { FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa6";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "@/services/actions/wishlist.action";
import { notify } from "@/services/utils/helpers/alerts";
import { useAppDispatch } from "@/redux/store/hooks";
import { setNumOfWishlistItems } from "@/redux/store/slices/wishlistSlice/WishlistSlice";

export default function WishlistToggleBtn({
  productId,
  initialState = false,
  className = "",
  children,
}: {
  productId: string;
  initialState?: boolean;
  className?: string;
  children?: (state: {
    isInWishlist: boolean;
    isLoading: boolean;
  }) => ReactNode;
}) {
  const [isInWishlist, setIsInWishlist] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  async function handleToggle(e: any) {
    e.stopPropagation();
    e.preventDefault();

    setIsLoading(true);

    if (isInWishlist) {
      const res = await removeFromWishlistAction(productId);

      if (!res.ok) {
        notify.error(res.error.message);
      } else {
        notify.success(res.data.message);
        setIsInWishlist(false);
        dispatch(setNumOfWishlistItems(res.data.data.length));
      }
    } else {
      const res = await addToWishlistAction({ productId });

      if (!res.ok) {
        notify.error(res.error.message);
      } else {
        notify.success(res.data.message);
        setIsInWishlist(true);
        dispatch(setNumOfWishlistItems(res.data.data.length));
      }
    }
    setIsLoading(false);
  }

  return (
    <AppButton
      onClick={handleToggle}
      className={`w-full flex items-center justify-center ${isLoading ? "pointer-events-none" : ""} ${isInWishlist ? "hover:text-red-500 hover:border-red-500" : "hover:text-main-color hover:border-main-color"} ${className}`}
    >
      {children ? (
        children({ isInWishlist, isLoading })
      ) : isInWishlist ? (
        <>
          {isLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <FaHeart />
          )}
          <span>In wishlist</span>
        </>
      ) : (
        <>
          {isLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <FaRegHeart />
          )}
          <span>Add to wishlist</span>
        </>
      )}
    </AppButton>
  );
}
