import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 125px;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;