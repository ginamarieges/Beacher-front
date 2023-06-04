import styled from "styled-components";

const ButtonStyled = styled.button`
  border: 1px solid ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSizes.smallSize};
  padding: 15px;
  text-transform: uppercase;

  .light-button {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }

  .dark-button {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default ButtonStyled;
