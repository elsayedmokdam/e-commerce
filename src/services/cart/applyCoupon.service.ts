import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart/applyCoupon";

export const applyCouponService = async (payload: { coupon: string }): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
