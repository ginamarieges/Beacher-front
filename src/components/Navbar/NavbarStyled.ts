import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.color.secondary};
  position: fixed;
  bottom: 0;

  li {
    display: contents;
  }

  .navbar-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 320px;
    justify-content: space-between;
    padding: 7px 20px;
    border-top: 1px solid ${(props) => props.theme.color.primary};

    &__icon {
      height: 48px;
    }
  }
`;
export default NavbarStyled;