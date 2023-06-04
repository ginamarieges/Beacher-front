import styled from "styled-components";

const BeachCardStyled = styled.article`
  background: rgb(105, 78, 67);
  background: linear-gradient(
    0deg,
    rgba(105, 78, 67, 0) 0%,
    rgba(153, 130, 114, 1) 0%,
    rgba(180, 139, 108, 1) 10%,
    rgba(204, 187, 165, 1) 65%
  );
  padding: 11px 11px 0 11px;
  min-width: 280px;
  min-height: 170px;
  border: 0.5px solid #000;

  .card {
    &__image {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }

    &__name {
      text-transform: uppercase;
    }

    &__town,
    &__name {
      font-size: ${(props) => props.theme.fontSizes.smallSize};
      line-height: 40px;
    }
  }

  .light-button {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }

  .dark-button {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default BeachCardStyled;
