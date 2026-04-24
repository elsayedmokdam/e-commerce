import { BASE_URL } from "../config";
import { AddRemoveWishlistResponse } from "../types/wishlist_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/wishlist";

export const addToWishlistService = async (
  payload: any,
): Promise<HttpResult<AddRemoveWishlistResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.post(`${BASE_URL}${ROUTE_URL}`, payload, {
    requiredAuthToken: true,
    token,
  });
};
