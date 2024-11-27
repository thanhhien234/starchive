import styled from "styled-components";
import PostItem from "./components/PostItem/PostItem";
import PagingButton from "@_components/PagingButton/PagingButton";
import { useState } from "react";

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

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Wrapper>
      <PostItemContainer>
        <PostItem 
          title="뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목"
          createdAt="2024-11-12"
          content="요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.
          요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. "
          userIntro="어쩌구 저쩌구 개발자입니다."
          userName="도안탄히엔"
          />
        <PostItem 
          title="뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목"
          createdAt="2024-11-12"
          content="요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.
          요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. "
          userIntro="어쩌구 저쩌구 개발자입니다."
          userName="도안탄히엔"
          />
        <PostItem 
          title="뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목"
          createdAt="2024-11-12"
          content="요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.
          요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. "
          userIntro="어쩌구 저쩌구 개발자입니다."
          userName="도안탄히엔"
          />
      </PostItemContainer>
      <PagingButtonWrapper>
        <PagingButton totalPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </PagingButtonWrapper>
    </Wrapper>
  )
}

export default Home;