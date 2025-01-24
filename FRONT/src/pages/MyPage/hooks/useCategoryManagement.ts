import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../../../services/api";
import { Category } from "../../../types/category";
import { fetchCategories } from "../../../services/categoryApi";

function useCategoryManagement() {
  const { data } = useQuery<ApiResponse<Category[]>>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data?.data) setCategories(data?.data);
  }, [data]);

  const addCategory = () => {
    const newCategory: Category = {
      id: Date.now(),
      name: "새 카테고리",
      children: [],
    };
    setCategories([...categories, newCategory]);
  };

  const moveCategory = (sourceId: number, destinationId: number) => {
    const updatedCategories = [...categories];

    const sourceIndex = updatedCategories.findIndex((category) => category.id === sourceId);
    const [movedCategory] = updatedCategories.splice(sourceIndex, 1);

    const destinationIndex = updatedCategories.findIndex((category) => category.id === destinationId);

    updatedCategories.splice(destinationIndex, 0, movedCategory);
    setCategories(updatedCategories);
  };

  return {
    categories,
    addCategory,
    moveCategory,
  };
}

export default useCategoryManagement;