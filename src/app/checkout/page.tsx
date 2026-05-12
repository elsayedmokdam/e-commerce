"use client";
import CheckoutForm from "@/components/checkout-form/CheckoutForm";
import { OrderSummary } from "@/components/shared/order-summary/OrderSummary";
import PageHeader from "@/components/shared/page-header/PageHeader";
import { useContext, useRef, useState } from "react";
import { FaBuilding, FaReceipt } from "react-icons/fa6";
import { cartContext } from "../_providers/context/CartContextProvider";
import { AppFormRef } from "@/components/shared/app-form/AppForm";
import { createCashOrderAction, createCheckoutSessionAction } from "@/services/actions/order.action";
import { notify } from "@/services/utils/helpers/alerts";
import { CreateOrderPayloadProps } from "@/services/types/order_interface";

export default function page() {
  const { cartItems, numOfCartItems, setNumOfCartItems, setCartItems } =
    useContext(cartContext);
  const products = cartItems?.data.products || [];
  const totalPrice = cartItems?.data.totalCartPrice || 0;
  const totalQuantity = cartItems?.data.products
    .map((count) => count.count)
    .reduce((a, b) => a + b, 0);
  const [loadingType, setLoadingType] = useState<"cash" | "online" | null>(null);

  // Make a form ref to access the form
  const formRef = useRef<AppFormRef>(null);


  function handleCashOrder() {
    formRef.current?.submit(async (data: CreateOrderPayloadProps) => {
      setLoadingType("cash");
      const response = await createCashOrderAction(
        cartItems?.cartId as string,
        data,
      );

      if (response.ok) {
        notify.success(response.data.message);
        setNumOfCartItems(0);
        setCartItems(null);
        formRef.current?.reset();
      } else {
        notify.error(response.error.message);
      }
      setLoadingType(null);
    });
  }
  function handleOnlineOrder() {
    formRef.current?.submit(async (data) => {
      setLoadingType("online");
      const response = await createCheckoutSessionAction(
        cartItems?.cartId as string,
        data,
      );

      if (response.ok) {
        setNumOfCartItems(0);
        setCartItems(null);
        formRef.current?.reset();
        window.open(response.data.session.url, "_self");
      } else {
        notify.error(response.error.message);
      }
      setLoadingType(null);
    });
  }
  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-b from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
        icon={<FaReceipt className="size-6" />}
        title="Complete Your Order"
        pageName={[
          { name: "Cart", href: "/cart" },
          { name: "Checkout", href: "/checkout" },
        ]}
        subtitle="Review your cart and proceed to checkout"
        iconBgColor="from-[#16A34A] to-[#4ADE80]"
      />

      <section className="w-full bg-gray-50 py-10 lg:py-14 xl:py-18 px-5 md:px-7 lg:px-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
            <div className="lg:col-span-2">
              <div className="mx-auto space-y-6 border border-gray-200 bg-white rounded-xl overflow-hidden shadow-md w-full">
                <div className="bg-linear-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] p-6">
                  <h1 className="flex items-center gap-2 text-white text-2xl font-bold">
                    <span>
                      <FaBuilding size={20} />
                    </span>
                    <span>Shipping Address</span>
                  </h1>
                  <p className="text-gray-200">
                    Where should we deliver your order?
                  </p>
                </div>
                <div className="px-6 pb-16">
                  <CheckoutForm formRef={formRef} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <OrderSummary
                totalItems={numOfCartItems}
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
                products={products}
                onCash={handleCashOrder}
                onOnline={handleOnlineOrder}
                loadingType={loadingType}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
