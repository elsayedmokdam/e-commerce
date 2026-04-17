import { BASE_URL } from "../config";
import { ClearCartResponse } from "../types/cart_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const clearCartService = async (): Promise<HttpResult<ClearCartResponse>> => {
  return httpClient.delete(`${BASE_URL}${ROUTE_URL}`, {
    requiredAuthToken: true
  })
};
