import styled from "styled-components";

const DetailsPageStyled = styled.section`
  .details-title {
    line-height: 40px;
    padding-top: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }

  .light-button {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
    border: 1px solid ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.smallSize};
    padding: 15px;
    text-transform: uppercase;
    margin: 15px 0;
  }

  line-height: 30px;

  .services-container {
    background-color: ${(props) => props.theme.color.secondary};
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 15px 0;
    font-size: ${(props) => props.theme.fontSizes.smallSize};
  }
  .services-title {
    text-transform: uppercase;
  }

  .beach {
    &__container {
      border: 0.5px solid #000000;
      display: flex;
      flex-direction: column;
      background: rgb(105, 78, 67);
      background: linear-gradient(
        180deg,
        #bca38a 0%,
        rgba(105, 78, 67, 0) 100%
      );

      padding: 15px;
    }

    &__name {
      padding-top: 10px;
      line-height: 40px;
      font-size: ${(props) => props.theme.fontSizes.titleSize};
      text-transform: uppercase;
    }
  }
`;

export default DetailsPageStyled;
