import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.uiStore.modal);
  const dispatch = useAppDispatch();

  const closeFeedback = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <ModalStyled>
      <div className={`feedback ${isError && `error`}`}>
        <span className="feedback__message">{message}</span>
        <Button
          accessibility="close button"
          className={`feedback__close-button`}
          actionOnClick={closeFeedback}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className={`${isError && `close-button`}`}
              d="M11.9999 10.8L1.19999 0L0 1.19999L10.8 11.9999L0 22.8L1.19999 24L11.9999 13.1999L22.8 24L24 22.8L13.1999 11.9999L24 1.19999L22.8 0L11.9999 10.8Z"
              fill="#564137"
            />
          </svg>
        </Button>
      </div>
    </ModalStyled>
  );
};

export default Modal;
