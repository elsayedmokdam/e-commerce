import { BASE_URL } from "../config";
import { SpecificBrandResponse } from "../types/brands_interface";
import { httpClient, HttpResult } from "../utils/http";

export const ROUTE_URL = "/api/v1/brands";

export const getSpecificBrandService = async (
  id: string,
): Promise<HttpResult<SpecificBrandResponse>> => {
  return httpClient.get(`${BASE_URL}${ROUTE_URL}/${id}`, {
    requiredAuthToken: false,
  });
};
