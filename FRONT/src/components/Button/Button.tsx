import { Wrapper } from "./Button.style";

interface ButtonProps {
  content: string;
  type: string;
  handleButtonClick: Function | undefined;
}

function Button({ content, type, handleButtonClick }: ButtonProps) {
  return <Wrapper $type={type} onClick={handleButtonClick}>{ content }</Wrapper>;
}

export default Button;