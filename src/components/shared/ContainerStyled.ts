import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${(props) => props.theme.color.secondary};
`;

export default ContainerStyled;
