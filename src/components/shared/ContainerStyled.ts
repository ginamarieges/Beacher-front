import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-height: 100vh;
  max-width: 400px;
  min-width: 320px;
  background-color: ${(props) => props.theme.color.secondary};
  padding-bottom: 90px;
`;

export default ContainerStyled;
