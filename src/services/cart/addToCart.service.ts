import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const addToCartService = async (payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
