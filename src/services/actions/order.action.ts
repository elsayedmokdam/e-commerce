"use server";
import $SERVICE_REPOSITORY from "../service.repo";
import { CashOrderResponse, CreateOrderPayloadProps, OnlineOrderResponse } from "../types/order_interface";
import { HttpResult } from "../utils/http";

export async function createCashOrderAction(
  cartId: string,
  payload: CreateOrderPayloadProps,
): Promise<HttpResult<CashOrderResponse>> {
  const response: HttpResult<CashOrderResponse> =
    await $SERVICE_REPOSITORY.Orders.createCashOrderV2(cartId, payload);
  return response;
}

export async function createCheckoutSessionAction(
  cartId: string,
  payload: CreateOrderPayloadProps,
): Promise<HttpResult<OnlineOrderResponse>> {
  const response: HttpResult<OnlineOrderResponse> =
    await $SERVICE_REPOSITORY.Orders.createCheckoutSession(cartId, payload);
  return response;
}