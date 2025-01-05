import { ButtonGroup, CreatePostContainer, PostTitleInput } from "./CreatePost.style";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import { Category } from "../../types/category";
import { fetchCategories } from "@_services/categoryApi";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../../services/api";
import EditorContainer from "./components/EditorContainer/EditorContainer";
import Button from "../../components/Button/Button";
import NicknamePasswordInput from "./components/NicknamePasswordInput/NicknamePasswordInput";
import TagWrapper from "./components/TagWrapper/TagWrapper";

function CreatePost() {
  const { data } = useQuery<ApiResponse<Category[]>>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <CreatePostContainer>
      <CategorySelector categories={data?.data as Category[]} />
      <PostTitleInput placeholder="제목을 입력하세요" />
      <EditorContainer />
      <TagWrapper/>
      <NicknamePasswordInput />
      <ButtonGroup>
        <Button content='임시저장' type='Primary' handleButtonClick={()=>{}} />
        <Button content='저장하기' type='Primary' handleButtonClick={()=>{}} />
      </ButtonGroup>
    </CreatePostContainer>
  );
}

export default CreatePost;
