"use server";
import $SERVICE_REPOSITORY from "../service.repo";
import { SpecificProductResponse } from "../types/products_interface";
import { HttpResult } from "../utils/http";

export async function getSpecificProductsAction(
  id: string,
): Promise<HttpResult<SpecificProductResponse>> {
  const response: HttpResult<SpecificProductResponse> =
    await $SERVICE_REPOSITORY.Products.getSpecificProduct(id);
  return response;
}
