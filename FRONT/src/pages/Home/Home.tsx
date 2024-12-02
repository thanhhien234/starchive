import PostItem from "./components/PostItem/PostItem";
import PagingButton from "@_components/PagingButton/PagingButton";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PagingButtonWrapper, PostItemContainer, Wrapper } from "./Home.style";
import { fetchPostList } from "../../services/postApi";
import { Post } from "../../types/post";
import { ApiResponse } from "../../services/api";
import TagWrapper from "../../components/TagWrapper/TagWrapper";

const Wrapper = styled.main`
  max-width: 700px;
  padding: 30px 20px;
  margin: auto;
`

const PostItemContainer = styled.section`
  width: 100%;
`;

const PagingButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TagContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TagTitle = styled.h3`
  color: var(--text-color);
`;

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tagList = ["Design Pattern", "Factory Pattern", "CI/CD", "DevOps", "Software Engineering","Design Pattern", "Factory Pattern", "CI/CD", "DevOps", "Software Engineering"];

  const { data } = useQuery<ApiResponse<Post[]>>({ queryKey: ['postData'], queryFn: () => fetchPostList() });

  return (
    <Wrapper>
      <PostItemContainer>
        {
          data?.data.map((postItem: Post, i: number) => 
            <PostItem 
              title={postItem.title}
              createdAt={postItem.createdAt}
              content={postItem.content}
              userName={postItem.author}
              userIntro="어쩌구 저쩌구 개발자입니다."
              categoryHier={postItem.categoryHier}
              key={i}
              />
            )
        }
      </PostItemContainer>
      <PagingButtonWrapper>
        <PagingButton totalPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </PagingButtonWrapper>
    </Wrapper>
  )
}

export default Home;