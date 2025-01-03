import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: #fff;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px 16px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: var(--background-color);
  }
`;

export const EditorPreviewWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const sharedStyles = `
  width: 50%;
  padding: 24px;
  font-size: 14px;
  border: none;
  color: var(--text-color);
  word-wrap: break-word;
  white-space: pre-wrap;
  border-top: 1px solid #DEE1E1;
  overflow-y: hidden;
  line-height: 1.6;
`;

export const Editor = styled.textarea`
  ${sharedStyles}
  border-right: 1px solid #DEE1E1;
  resize: none;

  &::placeholder {
    white-space: pre-wrap;
  }

  &:focus {
    outline: none;
  }
`;

export const Preview = styled.div<{ alignment?: string }>`
  ${sharedStyles}
  text-align: ${({ alignment }) => alignment || 'left'};

  blockquote { // 인용문
    margin: 0;
    padding-left: 20px;
    border-left: 4px solid var(--footer-text-color);
    font-style: italic;
  }

  ul, ol {
    margin: 0;
    padding-left: 20px;
    line-height: 1;
  }
`;

export const InlineCode = styled.code`
  display: inline;
  background-color: var(--background-color);
  color: var(--point-color);
  padding: 2px 5px;
  border-radius: 5px;
`;