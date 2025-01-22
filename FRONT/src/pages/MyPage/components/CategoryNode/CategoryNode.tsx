import { CategoryHeader, CategoryNodeContainer, IconGroup } from "./CategoryNode.style";
import CategoryMoveIcon from "@_assets/icons/toggle-icon.svg?react"
import EditIcon from "@_assets/icons/edit-icon.svg?react"
import TrashIcon from "@_assets/icons/trash-icon.svg?react"
import AddIcon from "@_assets/icons/add-icon.svg?react"
import IconButton from "@_components/IconButton/IconButton";

function CategoryNode({ name, id, onMove }: { name: string, id: number, onMove: (sourceId: number, destinationId: number) => void; }) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("categoryId", id.toString());
  };

  const handleDrop = (e: React.DragEvent) => {
    const sourceId = Number(e.dataTransfer.getData("categoryId"));
    onMove(sourceId, id);
  };

  return (
    <CategoryNodeContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <CategoryHeader>
        <CategoryMoveIcon aria-label='drag to move the category' />
        <h4>{ name }</h4>
      </CategoryHeader>
      <IconGroup>
        <IconButton tooltip='수정'><EditIcon /></IconButton>
        <IconButton tooltip='삭제'><TrashIcon /></IconButton>
        <IconButton tooltip='추가'><AddIcon /></IconButton>
      </IconGroup>
    </CategoryNodeContainer>
  )
}

export default CategoryNode;