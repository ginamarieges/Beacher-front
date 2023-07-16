import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-top: 65px;
  width: 224px;
  margin: 0 auto;

  .message {
    font-size: ${(props) => props.theme.fontSizes.smallSize};
    color: ${(props) => props.theme.color.badFeedback};
  }

  .form {
    &__controls {
      padding: 13px 10px;
      background-color: ${(props) => props.theme.color.secondary};
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.color.primary};
      font-size: ${(props) => props.theme.fontSizes.smallSize};
      color: ${(props) => props.theme.color.primary};

      &--wrong {
        border-bottom: 1px solid ${(props) => props.theme.color.badFeedback};
      }
    }

    &__button {
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.secondary};
      padding: 15px;
      font-size: ${(props) => props.theme.fontSizes.smallSize};
      text-transform: uppercase;

      :disabled {
        background-color: ${(props) => props.theme.color.secondary};
        color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};
      }
    }
  }
`;

export default RegisterFormStyled;
