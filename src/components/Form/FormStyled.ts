import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.primary};

  .form {
    &__input {
      background-color: ${(props) => props.theme.color.secondary};
      border: 1px solid ${(props) => props.theme.color.primary};
      padding: 10px;
      font-size: ${(props) => props.theme.fontSizes.smallSize};
    }

    &__label {
      padding-bottom: 10px;
      padding-top: 20px;
      text-transform: uppercase;
    }

    &__checkbox {
      width: 25px;
      height: 25px;
    }

    &__checkbox-controls {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  label > img {
    padding-right: 10px;
  }

  .select-container {
    display: flex;
    flex-direction: column;
  }

  .dark-button {
    margin-top: 30px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    border: 1px solid ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.smallSize};
    padding: 15px;
    text-transform: uppercase;
  }
`;

export default FormStyled;
