import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const createOrderV2Service = async (cartId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}/api/v2/orders/${cartId}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
