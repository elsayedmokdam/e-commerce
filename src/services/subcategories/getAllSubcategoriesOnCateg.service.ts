import { BASE_URL } from "../config";
import { CategoryResponse } from "../types/categories_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/categories";

export const getAllSubcategoriesOnCategService = async (
  id: string,
  params?: Record<string, string>,
): Promise<HttpResult<CategoryResponse>> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return httpClient.get(`${BASE_URL}${ROUTE_URL}/${id}/subcategories`, {
    requiredAuthToken: false,
  });
};
