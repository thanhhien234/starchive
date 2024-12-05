import styled from "styled-components";

export const Tag = styled.span<{ $isSelected: boolean }>`
  display: inline-block;
  padding: 2px 5px;
  background-color: ${props => props.$isSelected ? '#EAC58F' : 'var(--sub-color)'};
  color: var(--text-color);
  width: fit-content;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const TagList = styled.div`
    display: inline-block;
`;