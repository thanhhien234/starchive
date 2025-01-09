import { CreatePostParams } from '../types/post';
import { postRequest, ApiResponse } from './api';

export const postImage = async (imageFile: File): Promise<ApiResponse<any>> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await postRequest('/postImage', {
    body: formData,
  });

  return response;
};

export const createPost = (post: CreatePostParams) => {
  return postRequest<CreatePostParams>('/post', {
    body: post,
    headers: {
      'Content-type': 'application/json',
    }
  })
}