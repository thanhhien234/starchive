import { getRequest } from "./api";
import { Post } from "../types/post";

export const fetchPostsByTag = (tagName: string) => getRequest<Post[]>('/hashtag', { params: { tag: tagName } });
