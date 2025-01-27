import { IconButtonContainer, Tooltip } from "./IconButton.style";

interface IconButtonProps {
  children: React.ReactNode;
  tooltip?: string;
}

function IconButton({ children, tooltip }: IconButtonProps) {
  return(
    <IconButtonContainer>
      {children}
      <Tooltip>{ tooltip }</Tooltip>
    </IconButtonContainer>
  )
}

export default IconButton;