import styled, { css } from "styled-components";

export const CategoryNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CategoryButton = styled.button`
  display: flex;
  gap: 8px;
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  text-align: left;
`;

export const CategoryTitle = styled.h4<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--accent-color)' : 'white'};

  &:hover {
    opacity: 0.7;
  }
`;

export const CategoryToggleButton = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  ${({ $isOpen }) => css`
    padding-top: ${$isOpen ? '1.5px' : '0'};
    padding-right: ${$isOpen ? '0' : '1.5px'};
    transform: rotate(${$isOpen ? '0' : '-90deg'});
  `}
`;

export const SubcategoryGroup = styled.div`
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;