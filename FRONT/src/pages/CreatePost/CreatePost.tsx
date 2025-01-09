import { ButtonGroup, CreatePostContainer, PostTitleInput } from "./CreatePost.style";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import { Category } from "../../types/category";
import { fetchCategories } from "@_services/categoryApi";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../../services/api";
import Button from "../../components/Button/Button";
import NicknamePasswordInput from "./components/NicknamePasswordInput/NicknamePasswordInput";
import TagWrapper from "./components/TagWrapper/TagWrapper";
import MarkdownEditor from "./components/MarkdownEditor/MarkdownEditor";
import useCreatePost from "./hooks/useCreatePost";

function CreatePost() {
  const { post, handlePostChange, handleSaveButtonClick } = useCreatePost();
  const { data } = useQuery<ApiResponse<Category[]>>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <CreatePostContainer>
      <CategorySelector categories={data?.data as Category[]} />
      <PostTitleInput placeholder="제목을 입력하세요" />
      <MarkdownEditor />
      <TagWrapper/>
      <NicknamePasswordInput />
      <ButtonGroup>
        <Button content='임시저장' type='Primary' handleButtonClick={()=>{}} />
        <Button content='저장' type='Primary' handleButtonClick={handleSaveButtonClick} />
      </ButtonGroup>
    </CreatePostContainer>
  );
}

export default CreatePost;