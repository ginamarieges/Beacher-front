import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  nextPage,
  previousPage,
}: PaginationProps): React.ReactElement => {
  const counter = 1;
  const totalPages = 20;

  const actionOnNextButton = () => {
    nextPage();
  };

  const actionOnPreviousButton = () => {
    previousPage();
  };

  return (
    <PaginationStyled>
      <Button
        actionOnClick={actionOnPreviousButton}
        accessibility="previous-button"
        className={`${counter <= 1 && "hidden"}`}
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
        {counter}/{totalPages}
      </span>
      <Button accessibility="next-button" actionOnClick={actionOnNextButton}>
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
