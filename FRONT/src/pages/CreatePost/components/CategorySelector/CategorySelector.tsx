import { useState } from "react";
import dropdownArrow from "@_assets/icons/drop-down-icon.svg";
import {
  CategorySelectorContainer,
  CategorySelect,
  DropdownList,
  CategoryItem,
  BigCategory,
  SubCategoryList,
  SubCategoryItem,
} from "./CategorySelector.style";
import { Category } from "@_types/category";

function CategorySelector({ categories }: { categories: Category[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const getSelectedCategoryName = (id: number | null) => {
    if (!id) return "카테고리 선택";
    const category = categories.find((cat) => cat.id === id);
    return category ? category.name : "카테고리 선택";
  };

  const handleSelect = (id: number) => {
    setSelectedItemId(id);
    setIsDropdownOpen(false);
    console.log(id);
  };

  return (
    <CategorySelectorContainer>
      <CategorySelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {getSelectedCategoryName(selectedItemId)}
        <img src={dropdownArrow} />
      </CategorySelect>

      {isDropdownOpen && (
        <DropdownList>
          {categories.map((category) => (
            <CategoryItem key={category.id}>
              <BigCategory onClick={() => handleSelect(category.id)}>
                <img src={dropdownArrow} />
                {category.name}
              </BigCategory>
              {category.children && (
                <SubCategoryList>
                  {category.children.map((sub: Category) => (
                    <SubCategoryItem
                      key={sub.id}
                      onClick={() => handleSelect(sub.id)}
                    >
                      - {sub.name}
                    </SubCategoryItem>
                  ))}
                </SubCategoryList>
              )}
            </CategoryItem>
          ))}
        </DropdownList>
      )}
    </CategorySelectorContainer>
  );
}

export default CategorySelector;
