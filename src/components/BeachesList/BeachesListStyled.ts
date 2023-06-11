import styled from "styled-components";

const BeachesListStyled = styled.div`
  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .list-title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.titleSize};
    padding: 13px 0;
  }
  .no-beaches {
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.smallSize};
  }
`;

export default BeachesListStyled;
