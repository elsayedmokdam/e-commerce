import { createOrderService } from "./createOrder.service";
import { createOrderV2Service } from "./createOrderV2.service";
import { getOrdersService } from "./getOrders.service";
import { getUserOrdersService } from "./getUserOrders.service";
import { createCheckoutSessionService } from "./createCheckoutSession.service";

export const OrdersRepo = {
  createOrder: createOrderService,
  createOrderV2: createOrderV2Service,
  getOrders: getOrdersService,
  getUserOrders: getUserOrdersService,
  createCheckoutSession: createCheckoutSessionService,
};
