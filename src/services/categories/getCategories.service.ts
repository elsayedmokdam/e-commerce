import { BASE_URL } from "../config";
import { CategoryResponse } from "../types/categories_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/categories";

export const getCategoriesService = async (
  params?: Record<string, string>,
): Promise<HttpResult<CategoryResponse>> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return httpClient.get<CategoryResponse>(`${BASE_URL}${ROUTE_URL}${query}`);
};
