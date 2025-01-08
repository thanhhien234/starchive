import { postRequest, ApiResponse } from './api';

export const postImage = async (imageFile: File): Promise<ApiResponse<any>> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await postRequest('/postImage', {
    body: formData,
  });

  return response;
};
