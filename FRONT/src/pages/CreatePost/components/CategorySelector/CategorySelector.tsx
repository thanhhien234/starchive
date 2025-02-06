import { useState, useEffect } from "react";
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
import { Category } from "../../../../types/category";

interface CategorySelectorProps {
  categories: Category[],
  onCategorySelect: (id: number) => void,
  defaultCategoryId?: number | null, 
}

function CategorySelector({ categories, onCategorySelect, defaultCategoryId}: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const findCategoryById = (categories: Category[], id: number): Category | null => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.children.length > 0) {
        const found = findCategoryById(category.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  useEffect(() => {
    if (defaultCategoryId) {
      const category = findCategoryById(categories, defaultCategoryId);
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [defaultCategoryId]);

  const handleSelect = (category: Category) => {
    setSelectedCategory(category);
    if (category.id) onCategorySelect(category.id);
    setIsDropdownOpen(false);
  };

  return (
    <CategorySelectorContainer>
      <CategorySelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedCategory?.name || "카테고리 선택"}
        <img src={dropdownArrow} alt="Dropdown Arrow" />
      </CategorySelect>

      {isDropdownOpen && (
        <DropdownList>
          {categories?.map((category) => (
            <CategoryItem key={category.id}>
              <BigCategory onClick={() => handleSelect(category)}>
                {category.children.length > 0 && <img src={dropdownArrow} alt="Dropdown Arrow" />}
                {category.name}
              </BigCategory>
              {category.children && (
                <SubCategoryList>
                  {category.children.map((sub: Category) => (
                    <SubCategoryItem
                      key={sub.id}
                      onClick={() => handleSelect(sub)}
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