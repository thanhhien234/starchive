import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import category from './category.example.json';

interface Category {
  id: number;
  name: string;
  children: Category[];
}

interface AsideState {
  isAsideOpen: boolean;
  activeCategoryId: number | undefined;
  category: Category[];
}

interface AsideActions {
  setIsAsideOpen: (isOpen: boolean) => void;
  handleCategorySelect: (categoryId: number) => void;
  handleCloseAside: () => void;
}

function useAside(): AsideState & AsideActions {
  // const navigate = useNavigate();

  const [state, setState] = useState<AsideState>({
    isAsideOpen: true,
    activeCategoryId: undefined,
    category
  });

  const actions: AsideActions = {
    setIsAsideOpen: (isOpen) => setState(prev => ({ ...prev, isAsideOpen: isOpen })),

    handleCategorySelect: (categoryId) => {
      setState(prev => ({ ...prev, activeCategoryId: categoryId }));
      // navigate()로 나중에 함께 협의할 엔드포인트로 이동
    },

    handleCloseAside: () => setState(prev => ({ ...prev, isAsideOpen: false })),
  };

  return {
    ...state,
    ...actions,
  };
}

export default useAside;