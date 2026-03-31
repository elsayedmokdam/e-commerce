import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/orders";

export const getOrdersService = async (params?: Record<string, string>): Promise<any> => {
  const query = params ? `?${newSearchParams(params).toString()}` : "";
  return http(`${BASE_URL}${ROUTE_URL}${query}`, {
    method: "GET",
  });
};

function newSearchParams(params: Record<string, string>) {
  return new URLSearchParams(params);
}
