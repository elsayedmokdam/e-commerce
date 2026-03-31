import { getSubcategoriesService } from "./getSubcategories.service";
import { getSubcategoryByIdService } from "./getSubcategoryById.service";

export const SubcategoriesRepo = {
  getSubcategories: getSubcategoriesService,
  getSubcategoryById: getSubcategoryByIdService,
};
