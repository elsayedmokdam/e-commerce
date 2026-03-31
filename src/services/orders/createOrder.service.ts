import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const createOrderService = async (cartId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}/api/v1/orders/${cartId}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
