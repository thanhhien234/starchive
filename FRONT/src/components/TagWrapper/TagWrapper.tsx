import { Tag as TagType } from "../../types/tag";
import { TagList, Tag, TagContainer } from "./TagWrapper.style";

interface TagWrapperProps {
  tagList: TagType[];
  onTagClick?: (name: number) => void;
  selectedTag?: number | null;
}

function TagWrapper({ tagList, onTagClick, selectedTag }: TagWrapperProps) {
  return (
    <TagContainer>
      <h3>#태그</h3>
      <TagList>
        {tagList.map((tag, index) => (
          <Tag
          key={index}
          onClick={() => onTagClick && onTagClick(tag.id)}
          $isSelected={tag.id === selectedTag}
          >
            {tag.name}
          </Tag>
        ))}
      </TagList>
    </TagContainer>
  );
}

export default TagWrapper;