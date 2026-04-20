"use client";

import { useContext, useState } from "react";
import AppButton from "../app-button/AppButton";
import { FiShoppingCart } from "react-icons/fi";
import { addToCartAction } from "../../../services/actions/cart.action";
import { cartContext } from "@/app/_providers/context/CartContextProvider";
import { notify } from "@/services/utils/helpers/alerts";
import { FaSpinner } from "react-icons/fa6";

export default function AddToCartBtn({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  const { setNumOfCartItems, setCartItems } = useContext(cartContext);

  async function handleAddToCart(productId: string) {
    if (loading) return;
    setLoading(true);

    const response = await addToCartAction({ productId });
    setLoading(false);

    if (response.ok) {
      notify.success(response.data.message);
      setNumOfCartItems(response.data.numOfCartItems);
      setCartItems(response.data);
    } else {
      notify.error(response.error.message);
    }
  }

  return (
    <AppButton
      type="button"
      loading={loading}
      className="w-full text-xs md:text-sm bg-main-color hover:bg-main-color/80 transition-colors text-white rounded-full py-2 md:py-3"
      onClick={() => handleAddToCart(productId)}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          Adding
          <FaSpinner className="animate-spin " />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <FiShoppingCart />
          Add to Cart
        </span>
      )}
    </AppButton>
  );
}
