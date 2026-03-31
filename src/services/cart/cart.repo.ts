import { addToCartService } from "./addToCart.service";
import { getCartService } from "./getCart.service";
import { updateCartItemService } from "./updateCartItem.service";
import { removeCartItemService } from "./removeCartItem.service";
import { clearCartService } from "./clearCart.service";
import { applyCouponService } from "./applyCoupon.service";

export const CartRepo = {
  addToCart: addToCartService,
  getCart: getCartService,
  updateCartItem: updateCartItemService,
  removeCartItem: removeCartItemService,
  clearCart: clearCartService,
  applyCoupon: applyCouponService,
};
