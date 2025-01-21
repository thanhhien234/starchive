import { styled } from 'styled-components';

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & > a {
    text-decoration: none;
    color: var(--text-color);
  }
`;

export const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const UserProfileWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
`

export const UserImage = styled.figure`
  padding: 0;
  margin: 0;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
`;

export const UserInfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const UserName = styled.span`
  color: var(--text-color);
`;

export const SubInfo = styled.span`
  font-size: 12px;
  color: #AAA;
`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TagContainer = styled.span`
  color: var(--point-color);
  display: flex;
  gap: 5px;

  & a {
    color: var(--point-color);
    text-decoration: none;
  }
`

export const HashTagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;