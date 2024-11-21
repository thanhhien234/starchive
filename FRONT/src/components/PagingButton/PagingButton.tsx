import React from "react";
import { PagingButtonContainer, ArrowButton, PageButton } from "./PagingButton.styles";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface PagingButtonProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PagingButton: React.FC<PagingButtonProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const pagesArray = [];
  
  if (totalPages <= 5) {
    pagesArray.push(...Array.from({ length: totalPages }, (_, index) => index + 1));
    return (
      <PagingButtonContainer>
        {pagesArray.map((page, index) => (
          <PageButton
            key={index}
            $isActive={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PageButton>
        ))}
      </PagingButtonContainer>
    );
  } else {
    const leftLimit = Math.max(1, currentPage - 2);
    const rightLimit = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      for (let i = 1; i <= 5 && i <= totalPages; i++) {
        pagesArray.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pagesArray.push(i);
      }
    } else {
      for (let i = leftLimit; i <= rightLimit; i++) {
        pagesArray.push(i);
      }
    }
    return (
      <PagingButtonContainer>
        <ArrowButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={leftArrow} alt="left-arrow" />
        </ArrowButton>
        {pagesArray.map((page, index) => (
          <PageButton
            key={index}
            $isActive={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PageButton>
        ))}
        <ArrowButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={rightArrow} alt="right-arrow" />
        </ArrowButton>
      </PagingButtonContainer>
    );
  }
};

export default PagingButton;
