import Button from "../../../../components/Button/Button";
import { Category } from "../../../../types/category";
import useCategoryManagement from "../../hooks/useCategoryManagement";
import CategoryNode from "../CategoryNode/CategoryNode";
import { CategoryAddButton, CategoryList, CategoryManagementContainer, SubCategoryList } from "./CategoryManagement.style";

function CategoryManagement() {
  const { categories, addCategory, moveCategory } = useCategoryManagement();

  return (
    <CategoryManagementContainer>
      {categories?.map((primaryCategory: Category) => (
        <CategoryList key={primaryCategory.id}>
          <CategoryNode
            name={primaryCategory.name}
            id={primaryCategory.id || 0}
            onMove={moveCategory}
          />
          {primaryCategory.children?.map((subCategory) => (
            <SubCategoryList key={subCategory.id}>
              <CategoryNode
                name={subCategory.name}
                id={subCategory.id || 0}
                onMove={moveCategory}
              />
            </SubCategoryList>
          ))}
        </CategoryList>
      ))}
      <CategoryAddButton onClick={addCategory}>
        <h4>카테고리 추가</h4>
      </CategoryAddButton>
      <Button content="변경사항 저장" type="Primary" handleButtonClick={() => {}} />
    </CategoryManagementContainer>
  )
}

export default CategoryManagement;