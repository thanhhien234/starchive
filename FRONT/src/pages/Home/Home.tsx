import PostItem from "./components/PostItem/PostItem";
import PagingButton from "@_components/PagingButton/PagingButton";
import { useState } from "react";
import { PagingButtonWrapper, PostItemContainer, Wrapper } from "./Home.style";
import { Post } from "../../types/post";
import TagWrapper from "../../components/TagWrapper/TagWrapper";
import { useTag } from "../../components/TagWrapper/useTag";

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tagList = [
    { id: 1, name: "Design Pattern" },
    { id: 2, name: "Factory Pattern" },
    { id: 3, name: "CI/CD" },
    { id: 4, name: "DevOps" },
    { id: 5, name: "Software Engineering" },
  ];  

  const { 
    selectedTag,
    posts, 
    handleTagClick 
  } = useTag();

  return (
    <Wrapper>
      <TagWrapper tagList={tagList} onTagClick={handleTagClick} selectedTag={selectedTag}/>
      <PostItemContainer>
        {
          posts.map((postItem: Post, i: number) => 
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