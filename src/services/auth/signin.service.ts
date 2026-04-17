import { BASE_URL } from "../config";
import { httpClient, HttpResult } from "../utils/http";
import { SigninData, SigninResponse } from "../types/signin_interface";

export const ROUTE_URL = "/api/v1/auth/signin";


/**
 * Signin a user
 * @param {SigninData} payload - A Record containing the email and password to signin
 * @returns {Promise<HttpResult<SigninResponse>>} - A Promise resolving to the API response
 */
export const signinService = async (
  payload: SigninData,
): Promise<HttpResult<SigninResponse>> => {
  return httpClient.post<SigninResponse>(`${BASE_URL}${ROUTE_URL}`, payload);
};
