import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v1/reviews";

export const updateReviewService = async (reviewId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
