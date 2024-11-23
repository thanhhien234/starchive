import { PagingButtonContainer, ArrowButton, PageButton } from "./PagingButton.style";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface PagingButtonProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

function PagingButton({
  totalPages,
  currentPage,
  setCurrentPage,
}: PagingButtonProps) {

  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);
  const pagesArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <PagingButtonContainer>
      {startPage > 1 && (
        <ArrowButton
          onClick={() => setCurrentPage(startPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={leftArrow} alt="left-arrow" />
        </ArrowButton>
      )}

      {pagesArray.map((page) => (
        <PageButton
          key={page}
          $isActive={currentPage === page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PageButton>
      ))}

      {endPage < totalPages && (
        <ArrowButton
          onClick={() => setCurrentPage(endPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={rightArrow} alt="right-arrow" />
        </ArrowButton>
      )}
    </PagingButtonContainer>
  );
}

export default PagingButton;