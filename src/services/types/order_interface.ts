import { Product } from "./cart_interface";

export interface OrderSummaryProps {
  totalPrice: number;
  totalItems: number;
  totalQuantity: number | undefined;
  products?: Product[];
  onCash?: () => void;
  onOnline?: () => void;
  loadingType?: "cash" | "online" | null;
}

export interface CreateOrderPayloadProps {
  shippingAddress: ShippingAddress;
}

export interface CashOrderResponse {
  status: string;
  message: string;
  user: User;
  pricing: Pricing;
  data: Data;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Pricing {
  cartPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
}

export interface Data {
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User2;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}

export interface User2 {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface CartItem {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// online order
export interface OnlineOrderResponse {
  status: string;
  session: Session;
}

export interface Session {
  url: string;
  success_url: string;
  cancel_url: string;
}
