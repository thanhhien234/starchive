import styled from "styled-components";

export const IconButtonContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  font-size: 12px;
  top: 30px;
  left: 50%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  transform: translateX(-50%);
  background-color: var(--text-color);
  color: var(--sub-color);
  border-radius: 8px;
  padding: 4px 8px;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--text-color);
  }
`;