import React, { useState } from "react";
import {
  TagInputContainer,
  TagContainer,
  Tag,
  TagText,
  RemoveButton,
  InputField,
  AddTagButton,
  AddTagButtonText,
  TagIcon,
} from "./TagWrapper.style";
import tagAddIcon from "@_assets/icons/tag-add-icon.svg";
import tagDeleteIcon from "@_assets/icons/tag-delete-icon.svg";

function TagWrapper() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  const handleAddTagClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
      setIsInputVisible(false);
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <TagInputContainer>
      <AddTagButton onClick={handleAddTagClick}>
        <AddTagButtonText>태그 추가</AddTagButtonText>
        <TagIcon src={tagAddIcon} />
      </AddTagButton>
      {isInputVisible && (
        <InputField
          type="text"
          value={newTag}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="태그를 입력하세요"
        />
      )}

      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <TagText>{tag}</TagText>
            <RemoveButton
              onClick={() => handleRemoveTag(index)}
              src={tagDeleteIcon}
            />
          </Tag>
        ))}
      </TagContainer>
    </TagInputContainer>
  );
}

export default TagWrapper;
