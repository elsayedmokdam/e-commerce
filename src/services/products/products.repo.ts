import { getProductsService } from "./getProducts.service";
import { getProductByIdService } from "./getProductById.service";

export const ProductsRepo = {
  getProducts: getProductsService,
  getProductById: getProductByIdService,
};
