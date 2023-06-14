import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  color: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  min-height: 100vh;

  .notFound-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .title {
    font-size: 3rem;
    color: ${(props) => props.theme.color.primary};
  }

  .subtitle {
    width: 250px;
    font-size: ${(props) => props.theme.fontSizes.titleSize};
    color: ${(props) => props.theme.color.primary};
  }

  .text {
    width: 250px;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.smallSize};
  }
`;

export default NotFoundPageStyled;
