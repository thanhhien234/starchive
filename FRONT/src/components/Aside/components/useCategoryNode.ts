import { useState } from 'react';

function useCategoryNode() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  return {
    isOpen,
    handleToggle,
  };
}

export default useCategoryNode;