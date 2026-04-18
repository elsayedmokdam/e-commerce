import { BASE_URL } from "../config";
import { SignupData, SignupResponse } from "../types/signup_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/signup";

/**
 * Signup a user
 * @param {SignupData} payload - A Record containing the email, password, and name to signup
 * @returns {Promise<HttpResult<SignupResponse>>} - A Promise resolving to the API response
 */
export const signupService = async (
  payload: SignupData,
): Promise<HttpResult<SignupResponse>> => {
  return httpClient.post<SignupResponse>(`${BASE_URL}${ROUTE_URL}`, payload, {
    requiredAuthToken: false,
  });
};
