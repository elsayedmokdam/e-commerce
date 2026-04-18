import { BASE_URL } from "../config";
import { ProductResponse } from "../types/products_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/products";

export const getProductsService = async (
  params?: Record<string, string>,
): Promise<HttpResult<ProductResponse>> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return httpClient.get<ProductResponse>(`${BASE_URL}${ROUTE_URL}${query}`, {
    requiredAuthToken: false,
  });
};
