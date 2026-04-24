import { BASE_URL } from "../config";
import { BrandsResponse } from "../types/brands_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/brands";

export const getAllBrandsService = async (
  params?: Record<string, string>,
): Promise<HttpResult<BrandsResponse>> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return httpClient.get(`${BASE_URL}${ROUTE_URL}${query}`, {
    requiredAuthToken: false,
  });
};
