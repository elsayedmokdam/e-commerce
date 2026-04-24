import { BASE_URL } from "../config";
import { SpecificProductResponse } from "../types/products_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/products";

export const getSpecificProductService = async (
  id: string,
): Promise<HttpResult<SpecificProductResponse>> => {
  return httpClient.get(`${BASE_URL}${ROUTE_URL}/${id}`);
};
