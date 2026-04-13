import { BASE_URL } from "../config";
import { ProductResponse } from "../types/products_interface";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/products";

/**
 * Get products from the API
 * @param {Record<string, string>} [params] - Optional limit and page parameters for pagination
 * @returns {Promise<ProductResponse>} - Promise resolving to the API response
 */
export const getProductsService = async (
  params?: Record<string, string>,
): Promise<ProductResponse> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return http(`${BASE_URL}${ROUTE_URL}${query}`, {
    method: "GET",
  });
};
