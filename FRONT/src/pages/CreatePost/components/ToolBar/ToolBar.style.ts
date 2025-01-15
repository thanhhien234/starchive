import styled from "styled-components";

export const ToolBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;

export const Group = styled.div`
  display: flex;
  gap: 4px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: var(--hover-background-color);
  }

  &:active {
    color: var(--text-color);
  }
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0 8px;
  align-self: center;
  background-color: var(--line-color);
`

export const ModeToggle = styled.span<{ $active: boolean }>`
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ $active }) => ($active ? 'var(--text-color)' : 'var(--footer-text-color)')};

  &:hover {
    background-color: var(--hover-background-color);
  }
`;