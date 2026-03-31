import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/wishlist";

export const getWishlistService = async (): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "GET",
  });
};
