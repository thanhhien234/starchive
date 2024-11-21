import styled from "styled-components";

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
  font-size: ${({ $isActive }) => ($isActive ? "16px" : "14px")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
  cursor: pointer;
  padding: 0 5px;
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