import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img src="/img/header.svg" alt="beacher logo" width={30} height={30} />
    </HeaderStyled>
  );
};

export default Header;
