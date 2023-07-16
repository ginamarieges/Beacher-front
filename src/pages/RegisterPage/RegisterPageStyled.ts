import styled from "styled-components";

const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .app-title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    font-size: 2.125rem;
    padding-top: 29px;
    font-weight: 100;
  }
  .register-title {
    color: ${(props) => props.theme.color.primary};
    padding-top: 29px;
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }
`;

export default RegisterPageStyled;
