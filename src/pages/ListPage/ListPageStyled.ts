import styled from "styled-components";

const ListPageStyled = styled.div`
  .home-title {
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.titleSize};
    padding-top: 16px;
    min-width: 255px;
    line-height: 40px;
  }
`;

export default ListPageStyled;
