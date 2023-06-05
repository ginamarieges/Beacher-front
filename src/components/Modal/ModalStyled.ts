import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  background-color: #efece5e0;

  .feedback {
    position: relative;
    width: 250px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.goodFeedback};
    color: #000;

    &__close-button {
      position: absolute;
      background-color: transparent;
      top: 10px;
      right: 10px;
    }

    &__close-button--error {
      color: #fff;
    }

    &__message {
      width: 180px;
      text-align: center;
    }
  }

  .error {
    background-color: ${(props) => props.theme.color.badFeedback};
    color: #fff;
  }

  .close-button {
    fill: #fff;
  }
`;

export default ModalStyled;
