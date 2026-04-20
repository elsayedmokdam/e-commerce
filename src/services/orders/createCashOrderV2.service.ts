import { BASE_URL } from "../config";
import { CreateOrderPayloadProps, CashOrderResponse } from "../types/order_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v2/orders";

export const createCashOrderV2Service = async (
  cartId: string,
  payload: CreateOrderPayloadProps,
): Promise<HttpResult<CashOrderResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.post(`${BASE_URL}${ROUTE_URL}/${cartId}`, payload, {
    requiredAuthToken: true,
    token,
  });
};
