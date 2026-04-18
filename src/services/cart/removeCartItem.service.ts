import { BASE_URL } from "../config";
import { CartResponse } from "../types/cart_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const removeCartItemService = async (
  productId: string,
): Promise<HttpResult<CartResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;
  return httpClient.delete(`${BASE_URL}${ROUTE_URL}/${productId}`, {
    requiredAuthToken: true,
    token,
  });
};
