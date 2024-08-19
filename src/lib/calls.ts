import { fetchAPI } from "@/lib/fetch-api";

interface Article {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    category: {
      data: {
        id: number;
        attributes: Record<string, unknown>;
      };
    };
    authorsBio: {
      data: {
        id: number;
        attributes: Record<string, unknown>;
      };
    };
  };
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface FetchDataParams {
  start: number;
  limit: number;
}

export async function fetchData<T>(
  path: string,
  start?: number,
  end?: number,
): Promise<StrapiResponse<T>> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        cover: { fields: ["url"] },
        category: { populate: "*" },
        authorsBio: {
          populate: "*",
        },
      },
      pagination: {
        start: start ?? 0,
        limit: end ?? Number(process.env.NEXT_PUBLIC_PAGE_LIMIT),
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI<StrapiResponse<T>>(
      path,
      urlParamsObject,
      options,
    );

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Optionally rethrow the error if needed
  }
}

export async function getArticles(
  start: number,
  limit: number,
): Promise<Article[]> {
  const path = "/articles";
  const response = await fetchData<Article>(path, start, limit);
  return response.data;
}
