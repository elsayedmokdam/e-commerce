import { BASE_URL } from "../config";
import { httpClient, HttpResult } from "../utils/http";
import { SigninResponse } from "../types/signin_interface";

export const OAUTH_SIGNIN_ROUTE_URL = "/api/v1/auth/oauth-signin";

/**
 * Signin/Signup a user using OAuth provider data
 * @param {OAuthSigninData} payload - OAuth provider data
 * @returns {Promise<HttpResult<SigninResponse>>} - A Promise resolving to the API response
 */
export const oauthSigninService = async (
  payload: OAuthSigninData,
): Promise<HttpResult<SigninResponse>> => {
  return httpClient.post<SigninResponse>(`${BASE_URL}${OAUTH_SIGNIN_ROUTE_URL}`, payload, {
    requiredAuthToken: false,
  });
};

export interface OAuthSigninData {
  provider: "google" | "github";
  accessToken: string;
  email: string;
  name: string;
}