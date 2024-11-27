import PostItem from "./components/PostItem/PostItem";
import PagingButton from "@_components/PagingButton/PagingButton";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PagingButtonWrapper, PostItemContainer, Wrapper } from "./Home.style";
import { fetchPostList } from "../../services/postApi";
import { Post } from "../../types/post";
import { ApiResponse } from "../../services/api";

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);

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