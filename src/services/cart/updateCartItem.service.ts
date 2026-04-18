import { BASE_URL } from "../config";
import { CartResponse } from "../types/cart_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const updateCartItemService = async (
  productId: string,
  payload: { count: number },
): Promise<HttpResult<CartResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.put(`${BASE_URL}${ROUTE_URL}/${productId}`, payload, {
    requiredAuthToken: true,
    token,
  });
};
