import { BASE_URL } from "../config";
import { ReviewResponse } from "../types/products_interface";
import { httpClient, HttpResult } from "../utils/http";

export const getProductReviewsService = async (
  productId: string,
  params?: Record<string, string>,
): Promise<HttpResult<ReviewResponse>> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return httpClient.get(
    `${BASE_URL}/api/v1/products/${productId}/reviews${query}`,
  );
};
