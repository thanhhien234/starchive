import styled, { css } from 'styled-components';

export const Wrapper = styled.aside<{ $isAsideOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 263px;
  padding: 20px 30px;
  background-color: var(--primary-color);
  transform: translateX(${({ $isAsideOpen }) => ($isAsideOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const Overlay = styled.div<{ $isAsideOpen: boolean }>`
  position: fixed;
  inset: 0; // top, right, bottom, left를 모두 0으로 설정
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  visibility: ${({ $isAsideOpen }) => ($isAsideOpen ? 'visible' : 'hidden')};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
`;

export const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    opacity: 0.7;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  h2 {
    color: white;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TopCategoryItem = styled.li`
  border: 0.5px solid var(--sub-color);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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
