import { notify } from "@/utilities/alerts";

/**
 * Configuration options for HTTP requests
 */
interface HttpConfig {
  /** Custom success message to display */
  successMessage?: string;
  /** Whether to show error notifications automatically */
  showErrorToast?: boolean;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Whether to include credentials */
  withCredentials?: boolean;
}

/**
 * HTTP methods enum for type safety
 */
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

/**
 * HTTP status codes for better error handling
 */
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

/**
 * Custom error class for HTTP requests
 */
export class HttpError extends Error {
  public status: number;
  public data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Default configuration for HTTP requests
 */
const DEFAULT_CONFIG: Required<HttpConfig> = {
  successMessage: "",
  showErrorToast: true,
  timeout: 30000, // 30 seconds
  withCredentials: false,
};

/**
 * Get user-friendly error message based on HTTP status
 */
function getErrorMessage(status: number, data?: any): string {
  const defaultMessage = data?.message || `Request failed with status ${status}`;

  switch (status) {
    case HttpStatus.BAD_REQUEST:
      return data?.message || "Bad request. Please check your input.";
    case HttpStatus.UNAUTHORIZED:
      return "Session expired, please login again.";
    case HttpStatus.FORBIDDEN:
      return "Access denied. You don't have permission.";
    case HttpStatus.NOT_FOUND:
      return "Resource not found.";
    case HttpStatus.CONFLICT:
      return data?.message || "Conflict occurred.";
    case HttpStatus.UNPROCESSABLE_ENTITY:
      return data?.message || "Validation error. Please check your data.";
    case HttpStatus.INTERNAL_SERVER_ERROR:
      return "Server error. Please try again later.";
    case HttpStatus.BAD_GATEWAY:
    case HttpStatus.SERVICE_UNAVAILABLE:
    case HttpStatus.GATEWAY_TIMEOUT:
      return "Service unavailable. Please try again later.";
    default:
      return defaultMessage;
  }
}

/**
 * Create request headers with proper content type
 */
function createHeaders(options: RequestInit): Headers {
  const headers = new Headers(options.headers || {});

  // Only set Content-Type if not already set and body is present
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  return headers;
}

/**
 * Parse response data safely
 */
async function parseResponse<T>(response: Response): Promise<T> {
  if (response.status === HttpStatus.NO_CONTENT) {
    return {} as T;
  }

  try {
    return await response.json();
  } catch (error) {
    // If JSON parsing fails, return empty object
    console.warn("Failed to parse response as JSON:", error);
    return {} as T;
  }
}

/**
 * Custom fetch wrapper with comprehensive error handling and best practices
 * @param url - The URL to fetch from
 * @param options - The options to pass to the fetch function
 * @param config - Configuration for the request
 * @returns The response data as a promise
 */
export async function http<T = any>(
  url: string,
  options: RequestInit = {},
  config: HttpConfig = {},
): Promise<T> {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const headers = createHeaders(options);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), mergedConfig.timeout);

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
      credentials: mergedConfig.withCredentials ? "include" : "same-origin",
      cache: "no-cache",
    });

    clearTimeout(timeoutId);

    const data = await parseResponse<T>(response);

    if (!response.ok) {
      const message = getErrorMessage(response.status, data);
      throw new HttpError(message, response.status, data);
    }

    return data;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      throw new HttpError("Request timed out", 408);
    }

    if (error instanceof HttpError) {
      throw error;
    }

    throw new HttpError(error.message || "Network error", 0);
  }
}

/**
 * Convenience methods for common HTTP operations
 */
export const httpClient = {
  /**
   * GET request
   */
  get: <T = any>(url: string, config?: HttpConfig) =>
    http<T>(url, { method: HttpMethod.GET }, config),

  /**
   * POST request
   */
  post: <T = any>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(url, {
      method: HttpMethod.POST,
      body: data ? JSON.stringify(data) : undefined
    }, config),

  /**
   * PUT request
   */
  put: <T = any>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(url, {
      method: HttpMethod.PUT,
      body: data ? JSON.stringify(data) : undefined
    }, config),

  /**
   * PATCH request
   */
  patch: <T = any>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(url, {
      method: HttpMethod.PATCH,
      body: data ? JSON.stringify(data) : undefined
    }, config),

  /**
   * DELETE request
   */
  delete: <T = any>(url: string, config?: HttpConfig) =>
    http<T>(url, { method: HttpMethod.DELETE }, config),
};

