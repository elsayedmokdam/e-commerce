import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/products";

export const getProductsService = async (params?: Record<string, string>): Promise<any> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return http(`${BASE_URL}${ROUTE_URL}${query}`, {
    method: "GET",
  });
};
