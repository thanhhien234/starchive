import { Group, IconButton, ModeToggle, Separator, ToolBarContainer } from "./ToolBar.style";
import boldIcon from "@_assets/icons/toolbar/bold.svg";
import italicIcon from "@_assets/icons/toolbar/italic.svg";
import underlineIcon from "@_assets/icons/toolbar/underline.svg";
import addPhotoIcon from "@_assets/icons/toolbar/add-photo.svg";
import quoteIcon from "@_assets/icons/toolbar/quote.svg";
import codeIcon from "@_assets/icons/toolbar/code.svg";
import linkIcon from "@_assets/icons/toolbar/link.svg";

type ToolBarProps = {
  viewMode: "write" | "preview";
  setViewMode: (mode: "write" | "preview") => void;
  handleIconButtonClick: (action: string) => void;
  handleAddPhotoClick: () => void;
};

function ToolBar({ viewMode, setViewMode, handleIconButtonClick, handleAddPhotoClick }: ToolBarProps) {
  return (
    <ToolBarContainer>
      <Group>
        <IconButton onClick={() => handleIconButtonClick("bold")}>
          <img src={boldIcon} alt="굵게" />
        </IconButton>
        <IconButton onClick={() => handleIconButtonClick("italic")}>
          <img src={italicIcon} alt="기울이기" />
        </IconButton>
        <IconButton onClick={() => handleIconButtonClick("underline")}>
          <img src={underlineIcon} alt="밑줄" />
        </IconButton>
        <Separator />
        <IconButton onClick={handleAddPhotoClick}>
          <img src={addPhotoIcon} alt="사진 추가" />
        </IconButton>
        <IconButton onClick={() => handleIconButtonClick("quote")}>
          <img src={quoteIcon} alt="인용문 추가" />
        </IconButton>
        <IconButton onClick={() => handleIconButtonClick("code")}>
          <img src={codeIcon} alt="코드 추가" />
        </IconButton>
        <IconButton onClick={() => handleIconButtonClick("link")}>
          <img src={linkIcon} alt="링크 추가" />
        </IconButton>
      </Group>
      <Group>
        <ModeToggle $active={viewMode === "write"} onClick={() => setViewMode("write")}>Write</ModeToggle>
        <ModeToggle $active={viewMode === "preview"} onClick={() => setViewMode("preview")}>Preview</ModeToggle>
      </Group>
    </ToolBarContainer>
  );
}

export default ToolBar;
