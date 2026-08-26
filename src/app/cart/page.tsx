"use client";
import PageHeader from "@/components/shared/page-header/PageHeader";
import { FaCartShopping } from "react-icons/fa6";
import { Suspense } from "react";
import CartItemsList from "./CartItemsList";
import CartLoading from "./loading";
import { useAppSelector } from "@/redux/store/hooks";

export default function page() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const numOfCartItems = useAppSelector((state) => state.cart.numOfCartItems);
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
          cartItems={cartItems}
          numOfCartItems={numOfCartItems}
        />
      </Suspense>
    </>
  );
}
