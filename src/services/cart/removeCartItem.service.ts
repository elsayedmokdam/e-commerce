import { BASE_URL } from "../config";
import { CartResponse } from "../types/cart_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const removeCartItemService = async (productId: string): Promise<HttpResult<CartResponse>> => {
  return httpClient.delete(`${BASE_URL}${ROUTE_URL}/${productId}`, {
    requiredAuthToken: true,
  });
};
