import { BASE_URL } from "../config";
import { GetWishlistResponse } from "../types/wishlist_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/wishlist";

export const getWishlistService = async (): Promise<
  HttpResult<GetWishlistResponse>
> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;
  return httpClient.get(`${BASE_URL}${ROUTE_URL}`, {
    requiredAuthToken: true,
    token,
  });
};
