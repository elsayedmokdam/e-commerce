import { BASE_URL } from "../config";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient } from "../utils/http";

export const ROUTE_URL = "/api/v1/users/changeMyPassword";

export const changeMyPasswordService = async (payload: {
  currentPassword: string;
  password: string;
  rePassword: string;
}): Promise<any> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;
  return httpClient.put(`${BASE_URL}${ROUTE_URL}`, payload, {
    requiredAuthToken: true,
    token,
  });
};
