import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/verifyToken";

export const verifyTokenService = async (token: string): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
