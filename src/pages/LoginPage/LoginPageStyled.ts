import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
  color: ${(props) => props.theme.color.primary};

  .register {
    text-decoration: underline;
  }

  .app-title {
    text-transform: uppercase;
    font-size: 2.125rem;
    padding-top: 29px;
    font-weight: 100;
  }
`;

export default LoginPageStyled;
