import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const createCheckoutSessionService = async (cartId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}/api/v1/orders/checkout-session/${cartId}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
