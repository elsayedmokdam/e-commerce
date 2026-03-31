import { getCategoriesService } from "./getCategories.service";
import { getCategoryByIdService } from "./getCategoryById.service";
import { getCategorySubcategoriesService } from "./getCategorySubcategories.service";

export const CategoriesRepo = {
  getCategories: getCategoriesService,
  getCategoryById: getCategoryByIdService,
  getCategorySubcategories: getCategorySubcategoriesService,
};
