import { BASE_URL } from "../config";
import { SpecificCategoryResponse } from "../types/categories_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/categories";

export const getSpecificCategoryService = async (
  id: string,
): Promise<HttpResult<SpecificCategoryResponse>> => {
  return httpClient.get(`${BASE_URL}${ROUTE_URL}/${id}`, {
    requiredAuthToken: false,
  });
};
