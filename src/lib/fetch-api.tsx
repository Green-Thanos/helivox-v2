import qs from "qs";
import { getStrapiURL } from "@/lib/api-helpers";

export async function fetchAPI<
  T,
  U extends Record<string, unknown> = Record<string, unknown>,
>(
  path: string,
  urlParamsObject: U = {} as U,
  options: RequestInit = {},
): Promise<T> {
  try {
    // Merge default and user options
    const mergedOptions: RequestInit = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    // Parse the response as the expected type
    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Server is not running or you have the wrong tokens set in your .env file`,
    );
  }
}
