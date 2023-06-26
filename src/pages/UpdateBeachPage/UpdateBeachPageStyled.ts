import styled from "styled-components";

const UpdateBeachPageStyled = styled.div`
  .modify-title {
    line-height: 40px;
    padding-top: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }
`;

export default UpdateBeachPageStyled;
