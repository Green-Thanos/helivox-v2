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

export interface Member {
  id: number;
  attributes: {
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    avatar: {
      url: string;
      data: {
        attributes: {
          url: string;
        };
      };
    };
    LinkedIn: {
      url: string;
    };
    Twitter: {
      url: string;
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

export interface Event {
  id: number;
  attributes: {
    name: string;
    description: string;
    date: string;
    location: string;
    rsvp: string;
  };
  isUpcoming: boolean; // This will be calculated based on the date
}

export interface FormData {
  inquiryType: InquiryType;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export enum InquiryType {
  General = "General",
  Partnership = "Partnership",
  Opportunities = "Opportunities",
  Media = "Media",
  Support = "Support",
  Feedback = "Feedback",
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
        name: { fields: ["url"] },
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

async function fetchMembers<T>(
  path: string,
  start?: number,
  end?: number,
): Promise<StrapiResponse<T>> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        LinkedIn: { fields: ["url"] },
        email: { fields: ["url"] },
        avatar: {
          populate: "*",
        },
        name: { fields: ["url"] },
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

async function fetchEvents<T>(
  path: string,
  start?: number,
  end?: number,
): Promise<StrapiResponse<T>> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        name: { fields: ["url"] },
        description: { fields: ["url"] },
        date: { fields: ["url"] },
        location: { fields: ["url"] },
        rsvp: { fields: ["url"] },
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

export async function submitForm(data: FormData): Promise<void> {
  try {
    const token = process.env.STRAPI_FORM_TOKEN;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data }),
    };

    console.log("Form submit attempt");
    const response = await fetchAPI("/form-submissions", {}, options);

    console.log(response);
  } catch (error) {
    console.error("Error submitting form:", error);
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

export async function getMembers(
  start: number,
  limit: number,
): Promise<Member[]> {
  const path = "/members";
  const response = await fetchMembers<Member>(path, start, limit);
  return response.data;
}

export async function getEvents(
  start: number,
  limit: number,
): Promise<Event[]> {
  const path = "/events";
  const response = await fetchEvents<Event>(path, start, limit);
  return response.data;
}
