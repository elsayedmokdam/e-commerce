"use client";
import AddToCartBtn from "@/components/shared/product-card/AddToCartBtn";
import formatPrice from "@/lib/helpers/formatPrice";
import formatTitle from "@/lib/helpers/formatTitle";
import { removeFromWishlistAction } from "@/services/actions/wishlist.action";
import { ProductData } from "@/services/types/products_interface";
import { notify } from "@/services/utils/helpers/alerts";
import Link from "next/link";
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";
import AppButton from "@/components/shared/app-button/AppButton";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { setNumOfWishlistItems } from "@/redux/store/slices/wishlistSlice/WishlistSlice";

export default function WishlistItemCard({
  item,
  cartIds,
}: {
  item: ProductData;
  cartIds: Set<string>;
}) {
  const isInCart = cartIds.has(item._id);
  const isOutOfStock = item.quantity <= 0;

  const dispatch = useAppDispatch();
  const numOfWishlistItems = useAppSelector(
    (state) => state.wishlist.numOfWishlistItems,
  );

  async function handleRemoveFromWishlist(id: string) {
    const res = await removeFromWishlistAction(id);
    if (!res.ok) {
      notify.error(res.error.message);
    } else {
      notify.success(res.data.message);
      dispatch(setNumOfWishlistItems(numOfWishlistItems - 1));
    }
  }
  return (
    <div className="grid grid-cols-13 items-center px-6 py-5 border-b last:border-none border-gray-200">
      {/* Product */}
      <div className="col-span-6 flex items-center justify-start gap-4">
        <Link
          href={`products/${item._id}`}
          className="w-16 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center"
        >
          <img
            src={item.imageCover}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg "
          />
        </Link>

        <div>
          <Link
            href={`products/${item._id}`}
            className="font-medium text-gray-800 text-sm hover:text-main-color hover:underline"
          >
            {formatTitle(item.title, 30)}
          </Link>
          <p className="text-sm text-gray-400">
            {formatTitle(item.category.name, 20)}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="col-span-2 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-gray-700">
            {item.priceAfterDiscount
              ? formatPrice(item.priceAfterDiscount)
              : formatPrice(item.price)}{" "}
            EGP
          </p>
          <p>
            {item.priceAfterDiscount! > 0 && (
              <span className="text-sm text-red-500 line-through">
                {formatPrice(item.price)} EGP
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="col-span-2 flex items-center justify-center">
        <span className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-2.5 py-1 rounded-full w-fit">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>{isOutOfStock ? "Out of stock" : "In stock"}</span>
        </span>
      </div>

      {/* Actions */}
      <div className="col-span-3 flex items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          {isInCart ? (
            <Link
              href="/cart"
              className="w-full text-xs md:text-sm font-semibold bg-transparent hover:bg-transparent hover:text-main-color hover:border-main-color transition-colors border border-gray-400 text-gray-600 rounded-md py-2 px-4 flex items-center justify-center gap-2"
            >
              <span>
                <FaCheck />
              </span>
              <span>View Cart</span>
            </Link>
          ) : (
            <AddToCartBtn productId={item._id} />
          )}
        </div>

        <div>
          <AppButton
            onClick={() => handleRemoveFromWishlist(item._id)}
            type="button"
            color="red"
            className="bg-transparent hover:bg-transparent border text-gray-500 border-gray-400 hover:border-red-500 hover:text-red-500 rounded-md py-2 px-4 flex items-center justify-center gap-2"
          >
            <FaRegTrashCan />
          </AppButton>
        </div>
      </div>
    </div>
  );
}
