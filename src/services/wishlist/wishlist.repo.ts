import { addToWishlistService } from "./addToWishlist.service";
import { getWishlistService } from "./getWishlist.service";
import { removeFromWishlistService } from "./removeFromWishlist.service";

export const WishlistRepo = {
  addToWishlist: addToWishlistService,
  getWishlist: getWishlistService,
  removeFromWishlist: removeFromWishlistService,
};
