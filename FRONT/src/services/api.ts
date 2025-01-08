type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: HeadersInit,
  body?: FormData | unknown;
  params?: Record<string, string>
}

export type ApiResponse<T> = {
  data: T;
  status: number;
}

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const createFetchRequest = (method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') => 
  async <T>(endpoint: string, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> => {
    const { headers, body, params } = options || {};

    const url = new URL(`${BASE_URL}${endpoint}`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value))
    }

    const config: RequestInit = {
      method,
      headers
    }

    if (body instanceof FormData) {
      config.body = body;
    } else if (body) {
      config.body = JSON.stringify(body);
    }

    const res = await fetch(url.toString(), config);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = (await res.json()).data as T;

    return { data, status: res.status }
  } 

// 메서드별 요청 생성
export const getRequest = createFetchRequest('GET');
export const postRequest = createFetchRequest('POST');
export const putRequest = createFetchRequest('PUT');
export const deleteRequest = createFetchRequest('DELETE');