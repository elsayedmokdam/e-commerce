import { getProductsService } from "./getProducts.service";
import { getSpecificProductService } from "./getSpecificProduct.service";

export const ProductsRepo = {
  getProducts: getProductsService,
  getSpecificProduct: getSpecificProductService,
};
