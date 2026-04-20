import { createOrderService } from "./createOrder.service";
import { createCashOrderV2Service } from "./createCashOrderV2.service";
import { getOrdersService } from "./getOrders.service";
import { getUserOrdersService } from "./getUserOrders.service";
import { createCheckoutSessionService } from "./createCheckoutSession.service";

export const OrdersRepo = {
  createOrder: createOrderService,
  createCashOrderV2: createCashOrderV2Service,
  getOrders: getOrdersService,
  getUserOrders: getUserOrdersService,
  createCheckoutSession: createCheckoutSessionService,
};
