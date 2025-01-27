import { PostParams } from "../types/post";
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

  return getRequest<PostParams[]>('/posts', { 
    params: stringifiedParams
  });
};

export const fetchPost = (postId: number) => {
  return getRequest<PostParams>(`/post/${postId}`);
}