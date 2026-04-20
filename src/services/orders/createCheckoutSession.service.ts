import { BASE_URL } from "../config";
import {
  CreateOrderPayloadProps,
  OnlineOrderResponse,
} from "../types/order_interface";
import { getMyToken } from "../utils/helpers/getMyToken";
import { httpClient, HttpResult } from "../utils/http";

const ROUTE_URL = "/api/v1/orders/checkout-session";

export const createCheckoutSessionService = async (
  cartId: string,
  payload: CreateOrderPayloadProps,
): Promise<HttpResult<OnlineOrderResponse>> => {
  const decoded = await getMyToken();
  const token = decoded?.realToken;

  return httpClient.post(
    `${BASE_URL}${ROUTE_URL}/${cartId}?url=${`${process.env.NEXTAUTH_URL}`}`,
    payload,
    {
      requiredAuthToken: true,
      token,
    },
  );
};
