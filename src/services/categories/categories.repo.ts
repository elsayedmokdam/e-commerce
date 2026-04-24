import { getCategoriesService } from "./getCategories.service";
import { getCategorySubcategoriesService } from "./getCategorySubcategories.service";
import { getSpecificCategoryService } from "./getSpecificCategory.service";

export const CategoriesRepo = {
  getCategories: getCategoriesService,
  getSpecificCategory: getSpecificCategoryService,
  getCategorySubcategories: getCategorySubcategoriesService,
};
