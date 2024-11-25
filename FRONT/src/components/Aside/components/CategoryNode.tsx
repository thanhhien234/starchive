import categoryToggleButton from '../../../assets/icons/category-toggle-button.svg'
import useAside from '../useAside';
import {
  CategoryNodeContainer,
  CategoryButton,
  CategoryToggleButton,
  SubcategoryGroup,
  CategoryTitle
} from './CategoryNode.style';

interface Category {
  id: number;
  name: string;
  children: Category[];
}

interface CategoryNodeProps {
  category: Category;
  activeCategoryId?: number;
  onSelect: (id: number) => void;
  onClose: () => void;
}

function CategoryNode({ category, onSelect, activeCategoryId, onClose }: CategoryNodeProps) {
  const { isOpen, handleToggle } = useAside();
  const hasChildren = category.children && category.children.length > 0;

  return (
    <CategoryNodeContainer>
      <CategoryButton onClick={() => onSelect(category.id)}>
        {hasChildren && (
          <CategoryToggleButton
            src={categoryToggleButton}
            alt="toggle"
            $isOpen={isOpen}
            onClick={handleToggle}
          />
        )}
        <CategoryTitle $isActive={category.id === activeCategoryId}>{category.name}</CategoryTitle>
      </CategoryButton>
      {hasChildren && isOpen && (
        <SubcategoryGroup>
          {category.children.map((childCategory: Category) => (
            <CategoryNode
              key={childCategory.id}
              category={childCategory}
              onSelect={onSelect}
              activeCategoryId={activeCategoryId}
              onClose={onClose}
            />
          ))}
        </SubcategoryGroup>
      )}
    </CategoryNodeContainer>
  );
}

export default CategoryNode;