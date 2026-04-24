import { ProductData } from "./products_interface";

export interface AddRemoveWishlistResponse {
    status: string;
    message: string;
    data: string[];
}

export interface GetWishlistResponse {
  status: string;
  count: number;
  data: ProductData[];
}
