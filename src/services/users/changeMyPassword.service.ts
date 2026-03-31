import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/users/changeMyPassword";

export const changeMyPasswordService = async (payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
