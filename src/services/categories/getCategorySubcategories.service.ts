import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/categories";

export const getCategorySubcategoriesService = async (categoryId: string): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}/${categoryId}/subcategories`, {
    method: "GET",
  });
};
