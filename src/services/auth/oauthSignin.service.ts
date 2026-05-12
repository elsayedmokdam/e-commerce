import { HttpResult } from "../utils/http";
import { SigninResponse } from "../types/signin_interface";
import { SignupResponse } from "../types/signup_interface";
import { signinService } from "./signin.service";
import { signupService } from "./signup.service";

/**
 * Signin/Signup a user using OAuth provider data
 * Tries to signup first (for new users), and if user already exists, falls back to signin
 * @param {OAuthSigninData} payload - OAuth provider data
 * @returns {Promise<HttpResult<SigninResponse | SignupResponse>>} - A Promise resolving to the API response with token
 */
export const oauthService = async (
  payload: OAuthSigninData,
): Promise<HttpResult<SigninResponse | SignupResponse>> => {

  // Try to signup the user first (this will create new account or fail if exists)
  try {
    const signupResponse = await signupService({
      name: payload.name,
      email: payload.email,
      password: "Khaled#123",
      rePassword: "Khaled#123",
      phone: "", // OAuth users can add phone later
    });

    if (signupResponse.ok) {
        console.log("OAuth signup successful:", signupResponse);
      return signupResponse;
    }
  } catch (error) {
    console.log("OAuth signup attempt failed:", error);
  }

  // If signup fails (user likely exists), try signin with the generated password
  // The backend should handle OAuth email/password authentication
  try {
    const signinResponse = await signinService({
      email: payload.email,
      password: "Khaled#123",
    });

    if (signinResponse.ok) {
      console.log("OAuth signin successful:", signinResponse);
      return signinResponse;
    }
  } catch (error) {
    console.log("OAuth signin attempt failed:", error);
  }

  // If both fail, return error response
  return {
    ok: false,
    error: {
      message: "Failed to authenticate with OAuth provider",
    },
  } as any;
};

export interface OAuthSigninData {
  provider: "google" | "github";
  accessToken: string;
  email: string;
  name: string;
}