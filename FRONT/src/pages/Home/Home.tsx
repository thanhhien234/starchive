import styled from "styled-components";
import PostItem from "./components/PostItem/PostItem";

const TempWrapper = styled.main`
  max-width: 700px;
  padding: 30px 20px;
`

function Home() {
  return (
    <TempWrapper>
      <PostItem 
        title="뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목뭐시기 제목"
        createdAt="2024-11-12"
        content="요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.
        요거슨 내용 입니다. 요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다.요거슨 내용 입니다. "
        userIntro="어쩌구 저쩌구 개발자입니다."
        userName="도안탄히엔"
        />
    </TempWrapper>
  )
}

export default Home;