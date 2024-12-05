import { TagList, Tag } from "./TagWrapper.style";

interface Tag {
  id: number;
  name: string;
}

interface TagWrapperProps {
  tagList: Tag[];
  onTagClick?: (name: string) => void;
  selectedTag?: string | null;
}

function TagWrapper({ tagList, onTagClick, selectedTag }: TagWrapperProps) {
  return (
    <TagList>
      {tagList.map((tag, index) => (
        <Tag
          key={index}
          onClick={() => onTagClick && onTagClick(tag.name)}
          $isSelected={tag.name === selectedTag}
        >
          {tag.name}
        </Tag>
      ))}
    </TagList>
  );
}

export default TagWrapper;