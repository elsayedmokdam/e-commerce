import { getAllSubcategoriesOnCategService } from "./getAllSubcategoriesOnCateg.service";
import { getSubcategoryByIdService } from "./getSubcategoryById.service";

export const SubcategoriesRepo = {
  getAllSubcategoriesOnCateg: getAllSubcategoriesOnCategService,
  getSubcategoryById: getSubcategoryByIdService,
};
