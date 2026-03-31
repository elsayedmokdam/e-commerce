"use client";

import { notify } from "@/utilities/alerts";

/**
 * Custom fetch wrapper with auto toast handling
 * @params url - The URL to fetch from
 * @params options - The options to pass to the fetch function
 * @params config - Configuration for success message
 * @returns The response data as a promise
 */
export async function http<T = any>(
  url: string,
  options: RequestInit = {},
  config?: { successMessage?: string },
): Promise<T> {
  const headers = new Headers(options.headers || {});

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (config?.successMessage) {
      notify.success(config.successMessage || "Operation successful!");
    }

    if (response.status === 204) return {} as T;

    const data = await response.json().catch(() => ({}));

    // Error from the server
    if (!response.ok) {
      const message = data?.message || `Error ${response.status}`;

      let errorMessage = message;
      switch (response.status) {
        case 400:
          errorMessage =
            data?.message || "Bad request. Please check your input.";
          break;
        case 401:
          errorMessage = "Session expired, please login again.";
          break;
        case 403:
          errorMessage = "Access denied. You don't have permission.";
          break;
        case 404:
          errorMessage = "Resource not found.";
          break;
        case 409:
          errorMessage = data?.message || "Conflict occurred.";
          break;
        case 422:
          errorMessage =
            data?.message || "Validation error. Please check your data.";
          break;
        case 500:
          errorMessage = "Server error. Please try again later.";
          break;
        case 502:
        case 503:
        case 504:
          errorMessage = "Service unavailable. Please try again later.";
          break;
        default:
          errorMessage = message || "An error occurred, please try again.";
      }

      notify.error(errorMessage);
      throw new Error(message);
    }

    return data as T;
  } catch (error: any) {
    // Network error
    notify.error(error.message || "Network error, please try again later.");

    throw error;
  }
}
