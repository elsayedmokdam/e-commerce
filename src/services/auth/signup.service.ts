import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/signup";

export const signupService = async (payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
