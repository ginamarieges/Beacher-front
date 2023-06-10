import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${(props) => props.theme.color.primary};
  margin-top: 20px;
  .hidden {
    visibility: hidden;
  }
`;

export default PaginationStyled;
