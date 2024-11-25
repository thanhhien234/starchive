import styled from 'styled-components';

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
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;