import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  totalBeaches: number;
  nextPage: () => void;
  previousPage: () => void;
  page: number;
}

const Pagination = ({
  nextPage,
  previousPage,
  totalBeaches,
  page,
}: PaginationProps): React.ReactElement => {
  const actionOnNextButton = () => {
    nextPage();
    window.scrollTo(0, 0);
  };

  const actionOnPreviousButton = () => {
    previousPage();
    window.scrollTo(0, 0);
  };

  const currentPage = page;
  const totalPages = Math.trunc(totalBeaches / 5 + 1);

  return (
    <PaginationStyled>
      <Button
        actionOnClick={actionOnPreviousButton}
        accessibility="previous-button"
        className={`${currentPage === 1 && "hidden"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="47" height="47" fill="#EFECE4" />
          <path
            d="M18.1211 23.9999L32.121 9.99998L29.9998 7.87866L13.8784 23.9999L29.9998 40.1213L32.1212 37.9999L18.1211 23.9999Z"
            fill="#564137"
          />
          <rect x="0.5" y="0.5" width="47" height="47" stroke="#564137" />
        </svg>
      </Button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <Button
        accessibility="next-button"
        actionOnClick={actionOnNextButton}
        className={`${currentPage === totalPages && "hidden"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect width="48" height="48" fill="#564138" />
          <path
            d="M17.9997 7.87866L15.8784 9.99998L29.8784 23.9999L15.8784 37.9999L17.9997 40.1213L34.121 23.9999L17.9997 7.87866Z"
            fill="#EFECE4"
          />
        </svg>
      </Button>
    </PaginationStyled>
  );
};

export default Pagination;
