"use server";
import $SERVICE_REPOSITORY from "../service.repo";
import { AddRemoveWishlistResponse, GetWishlistResponse } from "../types/wishlist_interface";
import { HttpResult } from "../utils/http";

export async function addToWishlistAction({
  productId,
}: {
  productId: string;
}): Promise<HttpResult<AddRemoveWishlistResponse>> {
  const response: HttpResult<AddRemoveWishlistResponse> =
    await $SERVICE_REPOSITORY.Wishlist.addToWishlist({ productId });
  return response;
}

export async function removeFromWishlistAction(id: string) {
  const response: HttpResult<AddRemoveWishlistResponse> =
    await $SERVICE_REPOSITORY.Wishlist.removeFromWishlist(id);
  return response;
}

export async function getWishlistAction(): Promise<
  HttpResult<GetWishlistResponse>
> {
  const response: HttpResult<GetWishlistResponse> =
    await $SERVICE_REPOSITORY.Wishlist.getWishlist();
  return response;
}
