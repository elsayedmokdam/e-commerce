import { BASE_URL } from "../config";
import { SignupData, SignupResponse } from "../types/signup_interface";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/auth/signup";

/**
 * Signup service
 * @param payload SignupData
 * @returns Promise<SignupResponse>
 * Signup user using email and password
 */
export const signupService = async (
  payload: SignupData,
): Promise<SignupResponse> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
