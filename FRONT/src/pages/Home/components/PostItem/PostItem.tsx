import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface PostItemProps {
  title: string,
  content: string,
  createdAt: string,
  userName: string,
  userIntro: string
}

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & > a {
    text-decoration: none;
  }
`;

const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const UserProfileWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
`

const UserImage = styled.figure`
  padding: 0;
  margin: 0;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
  display: flex:
  justify-content: center;
  aligh-items: center;
  flex: none;
`;

const UserInfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const UserNameWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

const UserName = styled.span`
  font-size: 12px;
`;

const SubInfo = styled.span`
  font-size: 12px;
  color: #AAA;
`;

const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

function PostItem({ title, content, createdAt, userName, userIntro }: PostItemProps) {
  return (
    <Wrapper>
      <Link to="#">
        <Title>
          { title }
        </Title>
      </Link>
      <UserProfileWrapper>
        <UserImage>
          <img src="https://avatars.githubusercontent.com/u/95044821?v=4" alt="profile" width="100%" />
        </UserImage>
        <UserInfoWrapper>
          <UserNameWrapper>
            <UserName>{ userName }</UserName>
            <SubInfo>{ createdAt }</SubInfo>
          </UserNameWrapper>
          <SubInfo>{ userIntro }</SubInfo>
        </UserInfoWrapper>
      </UserProfileWrapper>
      <Link to="#">
        <Content>{ content }</Content>
      </Link>
    </Wrapper>
  )
}

export default PostItem;