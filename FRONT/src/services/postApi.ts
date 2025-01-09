import { Post } from "../types/post";
import { getRequest } from "./api";

interface PostListParams {
  category?: number;
  tag?: number;
  pageSize?: number;
  page?: number;
}

export const fetchPostList = (params?: PostListParams) => {
  const queryParams = {
    pageSize: 10,
    page: 1,
    ...params
  };

  const stringifiedParams: Record<string, string> = Object.fromEntries(
    Object.entries(queryParams).map(([key, value]) => [key, String(value)])
  );

  return getRequest<Post[]>('/posts', { 
    params: stringifiedParams
  });
};