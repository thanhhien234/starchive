import styled from "styled-components";

export const TagInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: var(--sub-color);
  border-radius: 20px;
  gap: 4px;
`;

export const TagText = styled.span`
  font-size: 14px;
`;

export const RemoveButton = styled.img`
  color: black;
  cursor: pointer;
`;

export const InputField = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: var(--sub-color);
  color: black;
  placeholder-color: #333333;
  width: 120px;
`;

export const AddTagButton = styled.button`
  padding: 5px 12px;
  border: 1px solid #e55632;
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;
  width: 120px;
  display: flex;
  flex-direaction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddTagButtonText = styled.span`
  color: #e55632;
  font-size: 14px;
`;

export const TagIcon = styled.img`
  width: 18px;
  height: 18px;
`;
