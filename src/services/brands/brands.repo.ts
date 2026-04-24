import { getAllBrandsService } from "./getAllBrands.service";
import { getSpecificBrandService } from "./getSpecificBrand.service";

export const BrandsRepo = {
  getAllBrands: getAllBrandsService,
  getSpecificBrand: getSpecificBrandService,
};
