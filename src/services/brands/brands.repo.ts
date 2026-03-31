import { getBrandsService } from "./getBrands.service";
import { getBrandByIdService } from "./getBrandById.service";

export const BrandsRepo = {
  getBrands: getBrandsService,
  getBrandById: getBrandByIdService,
};
