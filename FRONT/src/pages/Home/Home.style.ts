import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 30px 20px;
  gap: 10px;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostListWithTags = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 470px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PostItemContainer = styled.section`
  width: 100%;
  max-width: 700px;
`;

export const PagingButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;