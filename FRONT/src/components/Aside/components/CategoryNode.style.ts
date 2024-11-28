import styled, { css } from "styled-components";

export const CategoryButton = styled.button`
  display: flex;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  align-items: center;
`;

const baseTitleStyles = css<{ $isActive?: boolean }>`
  padding: 2px 5px;

  ${({ $isActive }) => {
    return $isActive
      ? css`
          background-color: var(--sub-color);
          color: var(--text-color);
        `
      : css`
          color: white;
        `
    }}

  &:hover {
    opacity: 0.7;
  }
`;

export const TopCategoryTitle = styled.h3<{ $isActive: boolean }>`
  ${baseTitleStyles}
`;

export const SubCategoryTitle = styled.h4<{ $isActive: boolean }>`
  ${baseTitleStyles}
`;

export const CategoryToggleButton = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  ${({ $isOpen }) => {
  return $isOpen
    ? css`
        padding-right: 0;
        transform: rotate(0);
      `
    : css`
        padding-top: 0;
        transform: rotate(-90deg);
      `
  }}
`;

export const SubCategoryGroup = styled.div`
  padding-left: 40px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;