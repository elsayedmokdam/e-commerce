import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const addReviewService = async (productId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}/api/v1/products/${productId}/reviews`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
