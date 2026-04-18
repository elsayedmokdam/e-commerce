import { BASE_URL } from "../config";
import { CartResponse } from "../types/cart_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const addToCartService = async (
  payload: any,
): Promise<HttpResult<CartResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.post(`${BASE_URL}${ROUTE_URL}`, payload, {
    requiredAuthToken: true,
    token,
  });
};
