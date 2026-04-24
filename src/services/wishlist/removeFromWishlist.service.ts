import { BASE_URL } from "../config";
import { AddRemoveWishlistResponse } from "../types/wishlist_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/wishlist";

export const removeFromWishlistService = async (
  productId: string,
): Promise<HttpResult<AddRemoveWishlistResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;
  return httpClient.delete(`${BASE_URL}${ROUTE_URL}/${productId}`, {
    requiredAuthToken: true,
    token,
  });
};
