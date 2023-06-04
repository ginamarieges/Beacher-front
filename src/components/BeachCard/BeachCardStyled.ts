import styled from "styled-components";

const BeachCardStyled = styled.article`
  background-color: #bca38a;
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
`;

export default BeachCardStyled;
