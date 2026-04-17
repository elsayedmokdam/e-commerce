import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const getCartService = async (): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "GET",
  }, { requiredAuthToken: true });
};
