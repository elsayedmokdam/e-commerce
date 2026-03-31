import { BASE_URL } from "../config";
import { http } from "../utils/http";

export const ROUTE_URL = "/api/v2/cart";

export const updateCartItemService = async (productId: string, payload: any): Promise<any> => {
  return http(`${BASE_URL}${ROUTE_URL}/${productId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
};
