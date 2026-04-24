"use client";
import { useContext, useMemo } from "react";
import { cartContext } from "../_providers/context/CartContextProvider";
import { ProductData } from "@/services/types/products_interface";
import WishlistItemCard from "./WishlistItemCard";

export default function WishlistTable({
  wishlist,
}: {
  wishlist: ProductData[];
}) {
  const { cartItems } = useContext(cartContext);
  const cartIds = useMemo(() => {
    return new Set(cartItems?.data.products.map((item) => item.product._id) || []);
  }, [cartItems]);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 md:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 my-7">
        <div className="overflow-x-auto">
          <div className="min-w-225">
            {/* Header */}
            <div className="grid grid-cols-12 px-6 py-6 text-sm font-medium text-gray-500 bg-gray-50 border-b border-gray-200">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>

            {wishlist.map((item) => (
              <WishlistItemCard key={item._id} item={item} cartIds={cartIds} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
