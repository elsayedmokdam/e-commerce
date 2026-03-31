import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/resetPassword";

export const resetPasswordService = async (payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
