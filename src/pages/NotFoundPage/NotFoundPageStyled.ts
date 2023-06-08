import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  color: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  min-height: 100vh;
  background: #bca38a66;
  background: linear-gradient(
      0deg,
      rgba(188, 163, 138, 0.4),
      rgba(188, 163, 138, 0.4)
    ),
    linear-gradient(180deg, #ccbba5 0%, rgba(105, 78, 67, 0) 100%);

  .notFound-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    width: 250px;
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }

  .text {
    width: 250px;
    font-size: ${(props) => props.theme.fontSizes.smallSize};
  }
`;

export default NotFoundPageStyled;
