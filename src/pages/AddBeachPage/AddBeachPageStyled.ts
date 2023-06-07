import styled from "styled-components";

const AddBeachPageStyled = styled.div`
  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSizes.titleSize};
  }
`;

export default AddBeachPageStyled;
