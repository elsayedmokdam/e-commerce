"use client";
import PageHeader from "@/components/shared/page-header/PageHeader";
import { FaCartShopping } from "react-icons/fa6";
import { Suspense, useContext } from "react";
import { cartContext } from "../_providers/context/CartContextProvider";
import CartItemsList from "./CartItemsList";
import CartLoading from "./loading";

export default function page() {
  const { cartItems, numOfCartItems } = useContext(cartContext);
  const products = cartItems?.data.products || [];
  const totalPrice = cartItems?.data.totalCartPrice || 0;
  const totalQuantity = cartItems?.data.products
    .map((count) => count.count)
    .reduce((a, b) => a + b, 0);
  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={<FaCartShopping className="size-6" />}
        title="My Cart"
        pageName={[{ name: "Cart", href: "/cart" }]}
        subtitle="Review your cart and proceed to checkout"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <Suspense fallback={<CartLoading />}>
        <CartItemsList
          products={products}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          numOfCartItems={numOfCartItems}
        />
      </Suspense>
    </>
  );
}
