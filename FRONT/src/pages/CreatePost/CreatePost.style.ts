import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin: auto;
  gap: 20px;
  max-width: 1080px;
`;

export const PostTitleInput = styled.input`
  height: 48px;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  justify-content: flex-end;
  display: flex;
  gap: 10px;
`;