import styled, { css } from 'styled-components';

export const PagingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: transparent;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 5px;

  ${({ $isActive }) => {
    return $isActive 
      ? css`
          font-size: 16px;
          font-weight: bold;
          text-decoration: underline;
        ` 
      : css`
          font-size: 14px;
          font-weight: normal;
          text-decoration: none;
        `;
  }}

  &:focus {
    outline: none;
  }
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
  border: none;
`;