export interface HttpConfig {
  successMessage?: string;
  withCredentials?: boolean;
  timeout?: number;
  requiredAuthToken?: boolean;
}

export interface HttpErrorShape {
  message: string;
  status: number;
  data?: any;
  statusText?: string;
}

export type HttpResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: HttpErrorShape };

const DEFAULT_CONFIG: Required<HttpConfig> = {
  successMessage: "",
  withCredentials: false,
  timeout: 30000,
  requiredAuthToken: false,
};

async function createHeaders(
  options: RequestInit,
  config: HttpConfig,
): Promise<Headers> {
  const headers = new Headers(options.headers || {});

  // Content-Type
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  // Auth Token
  if (config.requiredAuthToken) {
    let token: string | undefined;

    try {
      if (typeof window === "undefined") {
        const { getMyToken } = await import("./helpers/getMyToken");
        const decoded = await getMyToken();
        token = decoded?.realToken;
      } else {
        const { getSession } = await import("next-auth/react");
        const session = await getSession();
        token = session?.realToken;
      }

      if (token) {
        headers.set("token", token);
      }
    } catch {
      console.error("Failed to get auth token");
    }
  }

  return headers;
}

async function parseResponse<T>(res: Response): Promise<T> {
  try {
    return await res.json();
  } catch {
    return {} as T;
  }
}

function buildError(err: any, res?: Response, data?: any): HttpErrorShape {
  if (err?.name === "AbortError") {
    return { message: "Request timeout", status: 408 };
  }

  if (res) {
    return {
      message:
        data?.message ||
        {
          400: "Bad request",
          401: "Unauthorized",
          403: "Forbidden",
          404: "Not found",
          409: "Conflict",
          422: "Validation error",
          500: "Server error",
        }[res.status] ||
        "Something went wrong",
      status: res.status,
      data,
      statusText: res.statusText,
    };
  }

  return {
    message: err?.message || "Network error",
    status: 0,
  };
}

export async function http<T = any>(
  url: string,
  options: RequestInit = {},
  config: HttpConfig = {},
): Promise<HttpResult<T>> {
  const merged = { ...DEFAULT_CONFIG, ...config };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), merged.timeout);

  try {
    const headers = await createHeaders(options, merged);

    const res = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
      credentials: merged.withCredentials ? "include" : "same-origin",
    });

    const data = await parseResponse<T>(res);

    clearTimeout(timeoutId);

    if (!res.ok) {
      return {
        ok: false,
        error: buildError(null, res, data),
      };
    }

    return {
      ok: true,
      data,
    };
  } catch (err) {
    clearTimeout(timeoutId);

    return {
      ok: false,
      error: buildError(err),
    };
  }
}

export const httpClient = {
  get: <T>(url: string, config?: HttpConfig) =>
    http<T>(url, { method: "GET" }, config),

  post: <T>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(
      url,
      {
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
      },
      config,
    ),

  put: <T>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(
      url,
      {
        method: "PUT",
        body: data ? JSON.stringify(data) : undefined,
      },
      config,
    ),

  patch: <T>(url: string, data?: any, config?: HttpConfig) =>
    http<T>(
      url,
      {
        method: "PATCH",
        body: data ? JSON.stringify(data) : undefined,
      },
      config,
    ),

  delete: <T>(url: string, config?: HttpConfig) =>
    http<T>(url, { method: "DELETE" }, config),
};
