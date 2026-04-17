import { BASE_URL } from "../config";
import { httpClient } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const addToCartService = async (payload: any): Promise<any> => {
  return httpClient.post(`${BASE_URL}${ROUTE_URL}`, payload, {
    requiredAuthToken: true,
  });
};
