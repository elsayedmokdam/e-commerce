import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/categories";

export const getCategoryByIdService = async (id: string): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}/${id}`, {
    method: "GET",
  });
};
