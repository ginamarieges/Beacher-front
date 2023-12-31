import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar.js";
import Header from "../Header/Header.js";
import { paths } from "../../routers/paths/paths.js";
import Modal from "../Modal/Modal.js";
import { useAppSelector } from "../../store/index.js";
import Loader from "../Loader/Loader.js";

const Layout = (): React.ReactElement => {
  const {
    isLoading,
    modal: { isVisible },
  } = useAppSelector((state) => state.uiStore);
  const location = useLocation();
  return (
    <>
      <ContainerStyled>
        {location.pathname === paths.login || <Header />}
        <Outlet />
      </ContainerStyled>
      {location.pathname === paths.login || <Navbar />}
      {isVisible && <Modal />}
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
