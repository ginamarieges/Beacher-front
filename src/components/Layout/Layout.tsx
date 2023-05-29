import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar.js";
const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Outlet />
      <Navbar></Navbar>
    </ContainerStyled>
  );
};

export default Layout;
