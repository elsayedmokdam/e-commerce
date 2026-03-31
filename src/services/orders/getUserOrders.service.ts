import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const getUserOrdersService = async (userId: string, params?: Record<string, string>): Promise<any> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return http(`${BASE_URL}/api/v1/orders/user/${userId}${query}`, {
    method: "GET",
  });
};
