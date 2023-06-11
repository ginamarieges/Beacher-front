import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  .select {
    &__input {
      background-color: ${(props) => props.theme.color.secondary};
      border: 1px solid ${(props) => props.theme.color.primary};
      padding: 10px;
      font-size: ${(props) => props.theme.fontSizes.smallSize};
    }
  }
`;

export default FilterStyled;
