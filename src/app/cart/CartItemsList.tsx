import AppButton from "@/components/shared/app-button/AppButton";
import { CartItemCard } from "@/components/shared/cart-item-card/CartItemCard";
import IsEmpty from "@/components/shared/is-empty/IsEmpty";
import { OrderSummary } from "@/components/shared/order-summary/OrderSummary";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { clearCartAction } from "@/services/actions/cart.action";
import { notify } from "@/services/utils/helpers/alerts";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useAppDispatch } from "@/redux/store/hooks";
import {
  setCartItems,
  clearCart,
} from "@/redux/store/slices/cartSlice/CartSlice";
import { CartResponse } from "@/services/types/cart_interface";

export default function CartItemsList({
  products,
  totalQuantity,
  totalPrice,
  cartItems,
  numOfCartItems,
}: {
  products: any[];
  totalQuantity: number | undefined;
  totalPrice: number;
  cartItems: CartResponse | null;
  numOfCartItems: number;
}) {
  const dispatch = useAppDispatch();

  function clearCartHandler() {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (!willDelete) return;

      const previousCart = cartItems ? structuredClone(cartItems) : null;
      // Optimistic update(client Side)
      if (cartItems) {
        dispatch(
          setCartItems({
            ...cartItems,
            numOfCartItems: 0,
            data: {
              ...cartItems.data,
              products: [],
              totalCartPrice: 0,
            },
          }),
        );
      }
      // Handle the request on server
      clearCartAction().then((res) => {
        if (res.ok) {
          dispatch(clearCart());
          notify.success(res.data.message);
        } else {
          // Rollback to the previous state
          previousCart && dispatch(setCartItems(previousCart));
          notify.error(res.error.message);
        }
      });
    });
  }

  return (
    <section className="w-full bg-gray-50 py-10 lg:py-14 xl:py-18 px-5 md:px-7 lg:px-9">
      <div className="max-w-7xl mx-auto">
        {numOfCartItems === 0 ? (
          <IsEmpty
            icon={<MdRemoveShoppingCart size={64} className="text-gray-300" />}
            title="Your cart is empty"
            description="Looks like you haven't added anything to your cart yet. Start exploring our products!"
            links={[
              {
                label: "Continue Shopping",
                href: "/",
              },
            ]}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {products.map((item) => (
                <CartItemCard key={item._id} product={item} />
              ))}

              <div className="border border-gray-200"></div>

              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="text-green-600 flex items-center gap-1 justify-center group"
                >
                  <span className="group-hover:-translate-x-1 transition">
                    <BsArrowLeft size={20} />
                  </span>
                  <span>Continue Shopping</span>
                </Link>

                <AppButton
                  onClick={clearCartHandler}
                  className="bg-transparent hover:bg-transparent hover:text-red-500 text-gray-400 flex items-center gap-1"
                >
                  <span>
                    <FiTrash2 size={20} />
                  </span>
                  <span>Clear All Items</span>
                </AppButton>
              </div>
            </div>

            <OrderSummary
              totalPrice={totalPrice}
              totalItems={numOfCartItems}
              totalQuantity={totalQuantity}
            />
          </div>
        )}
      </div>
    </section>
  );
}
