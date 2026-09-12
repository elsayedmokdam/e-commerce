import { BASE_URL } from "../config";
import { ReviewResponse } from "../types/products_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/products";

export const addReviewService = async (
  payload: {
    rating: number;
    review: string;
  },
  productId: string,
): Promise<HttpResult<ReviewResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.post(`${BASE_URL}${ROUTE_URL}/${productId}/reviews`, payload, {
    requiredAuthToken: true,
    token,  
  });
};
