import { CreatePostContainer, PostTitleInput } from "./CreatePost.style";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import { Category } from "@_types/category";
import { fetchCategories } from "@_services/categoryApi";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@_services/api";

function CreatePost() {
  const { data } = useQuery<ApiResponse<Category[]>>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  
  return (
    <CreatePostContainer>
      <CategorySelector categories={data?.data as Category[]} />
      <PostTitleInput placeholder="제목을 입력하세요" />
    </CreatePostContainer>
  );
}

export default CreatePost;
