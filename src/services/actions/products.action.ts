"use server";
import $SERVICE_REPOSITORY from "../service.repo";
import {
  ReviewResponse,
  SpecificProductResponse,
} from "../types/products_interface";
import { HttpResult } from "../utils/http";

export async function getSpecificProductsAction(
  id: string,
): Promise<HttpResult<SpecificProductResponse>> {
  const response: HttpResult<SpecificProductResponse> =
    await $SERVICE_REPOSITORY.Products.getSpecificProduct(id);
  return response;
}

export async function addProductReviewAction(
  payload: { rating: number; review: string },
  id: string,
): Promise<HttpResult<ReviewResponse>> {
  const response: HttpResult<ReviewResponse> =
    await $SERVICE_REPOSITORY.Reviews.addReview(payload, id);
  return response;
}

export async function getProductReviewsAction(id: string) {
  const response: HttpResult<ReviewResponse> =
    await $SERVICE_REPOSITORY.Reviews.getProductReviews(id);
  return response;
}
