import { Post } from "../types/post";
import { getRequest } from "./api";


export const fetchPostList = (params?: Record<string, string>) => getRequest<Post[]>('/post', { params });