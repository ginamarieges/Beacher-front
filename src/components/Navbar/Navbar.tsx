import { NavLink, useNavigate } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../routers/paths/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const Navbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.userStore.isLogged);

  const logout = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate(paths.login);
  };

  const actionOnClick = () => {
    dispatch(paginationActionCreator(1));
    scrollTo(0, 0);
  };

  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink
            to={paths.home}
            className="navbar-list__icon"
            aria-label="home"
            title="home"
            onClick={actionOnClick}
          >
            <img src="/img/home.svg" alt="home icon" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={paths.addBeach}
            className="navbar-list__icon"
            aria-label="add-beach"
            title="add beach"
          >
            <img
              src="/img/add.svg"
              alt="add beach icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>

        <li>
          <button
            onClick={logout}
            className="navbar-list__icon"
            aria-label="logout"
            title="logout"
          >
            <img
              src={`/img/${isLogged ? `logout` : `login`}.svg`}
              alt="logout icon"
              width={48}
              height={48}
            />
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
