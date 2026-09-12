import { BASE_URL } from "../config";
import { SubcategoryResponse } from "../types/categories_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/subcategories";

export const getSubcategoryByIdService = async (
  id: string,
): Promise<HttpResult<SubcategoryResponse>> => {
  return httpClient.get(`${BASE_URL}${ROUTE_URL}/${id}`);
};
