import styled, { css } from "styled-components";

export const Wrapper = styled.button<{ $type: string, onClick: Function | undefined }>`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  ${({ $type }) => {
    switch ( $type ) {
      case "Primary":
        return css`
          background: var(--primary-color);
          color: #FFF;
        `;
      case "Accent":
        return css`
          background: var(--accent-color);
          color: var(--text-color);
        `;
      default:
        return css`
          background: white;
          color: var(--text-color);
          border: 1px solid #aaa;
        `
    }
  }}
`;