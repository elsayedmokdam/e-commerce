import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/verifyResetCode";

export const verifyResetCodeService = async (resetCode: string): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "POST",
    body: JSON.stringify({ resetCode }),
  });
};
