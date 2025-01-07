import { postRequest, ApiResponse } from "./api";

export const postImage = async (imageFile: File): Promise<ApiResponse<any>> => {
  const formData = new FormData();
  formData.append("payload", imageFile);

  const response = await postRequest("/postImage", {
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
};
