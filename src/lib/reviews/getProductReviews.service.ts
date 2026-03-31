import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const getProductReviewsService = async (productId: string, params?: Record<string, string>): Promise<any> => {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  return http(`${BASE_URL}/api/v1/products/${productId}/reviews${query}`, {
    method: "GET",
  });
};
