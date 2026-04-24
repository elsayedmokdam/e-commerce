"use server";

import { $SERVICE_REPOSITORY } from "@/services/service.repo";
import { CartResponse, ClearCartResponse } from "@/services/types/cart_interface";
import { HttpResult } from "@/services/utils/http";

export async function addToCartAction(productId: {
  productId: string;
}): Promise<HttpResult<CartResponse>> {
  const response: HttpResult<CartResponse> =
    await $SERVICE_REPOSITORY.Cart.addToCart(productId);
  return response;
}

export async function getLoggedUserCartAction(): Promise<
  HttpResult<CartResponse>
> {
  const response: HttpResult<CartResponse> =
    await $SERVICE_REPOSITORY.Cart.getCart();
  return response;
}

export async function removeFromCartAction(
  productId: string,
): Promise<HttpResult<CartResponse>> {
  const response: HttpResult<CartResponse> =
    await $SERVICE_REPOSITORY.Cart.removeCartItem(productId);
  return response;
}

export async function updateCartItemAction(
  productId: string,
  payload: { count: number },
): Promise<HttpResult<CartResponse>> {
  const response: HttpResult<CartResponse> =
    await $SERVICE_REPOSITORY.Cart.updateCartItem(productId, payload);
  return response;
}

export async function clearCartAction(): Promise<HttpResult<ClearCartResponse>> {
  const response: HttpResult<ClearCartResponse> = await $SERVICE_REPOSITORY.Cart.clearCart();
  return response;
}