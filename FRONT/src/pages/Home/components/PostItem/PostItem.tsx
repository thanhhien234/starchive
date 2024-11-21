import { Link } from 'react-router-dom';
import { 
  Content, 
  SubInfo, 
  Title, 
  UserImage, 
  UserInfoWrapper, 
  UserName, 
  UserNameWrapper, 
  UserProfileWrapper, 
  Wrapper } 
  from './PostItem.style';

interface PostItemProps {
  title: string,
  content: string,
  createdAt: string,
  userName: string,
  userIntro: string
}

function PostItem({ title, content, createdAt, userName, userIntro }: PostItemProps) {
  return (
    <Wrapper>
      <Link to="#">
        <Title>{ title }</Title>
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