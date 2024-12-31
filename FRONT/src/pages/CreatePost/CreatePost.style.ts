import styled from "styled-components";

export const CreatePostContainer = styled.div`
  background-color: #f8f9f9;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin: auto;
  gap: 20px;
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
