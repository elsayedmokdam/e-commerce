import { BASE_URL } from "../config";
import { CartResponse } from "../types/cart_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const updateCartItemService = async (productId: string, payload: {count: number}): Promise<HttpResult<CartResponse>> => {
  return httpClient.put(`${BASE_URL}${ROUTE_URL}/${productId}`, payload, {
    requiredAuthToken: true,
  })
};
