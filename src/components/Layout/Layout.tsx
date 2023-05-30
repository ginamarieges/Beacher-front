import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar.js";
import Header from "../Header/Header.js";
import { paths } from "../../routers/paths/paths.js";
const Layout = (): React.ReactElement => {
  const location = useLocation();
  return (
    <>
      <ContainerStyled>
        {location.pathname === paths.login || <Header />}
        <Outlet />
      </ContainerStyled>
      {location.pathname === paths.login || <Navbar />}
    </>
  );
};

export default Layout;
