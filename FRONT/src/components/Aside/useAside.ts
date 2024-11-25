import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import category from './category.example.json';
import useAsideStore from '../../store/useAsideStore';

function useAside() {
  // const navigate = useNavigate();
  const { isAsideOpen, setIsAsideOpen } = useAsideStore();
  const [activeCategoryId, setActiveCategoryId] = useState<number | undefined>(undefined);

  const handleCategorySelect = (categoryId: number) => {
    setActiveCategoryId(categoryId);
    // navigate()로 나중에 함께 협의할 엔드포인트로 이동
    setIsAsideOpen(false);
  };

  const handleOpenAside = () => setIsAsideOpen(true);
  const handleCloseAside = () => setIsAsideOpen(false);

  return {
    category,
    isAsideOpen,
    activeCategoryId,
    handleCategorySelect,
    handleOpenAside,
    handleCloseAside
  };
}

export default useAside;