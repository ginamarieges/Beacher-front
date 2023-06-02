import { NavLink, useNavigate } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../routers/paths/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import { UserTokenData } from "../../store/user/types";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const Navbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();
  const userCredentials = useAppSelector((state) => state.userStore);

  const logout = (userCredentials: UserTokenData) => {
    dispatch(logoutUserActionCreator(userCredentials));
    removeToken("token");
    navigate(paths.login);
  };

  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink
            to={paths.home}
            className="navbar-list__icon"
            aria-label="home"
          >
            <img src="/img/home.svg" alt="home icon" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={paths.addBeach}
            className="navbar-list__icon"
            aria-label="add-beach"
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
            onClick={() => logout(userCredentials)}
            className="navbar-list__icon"
            aria-label="logout"
          >
            <img
              src="/img/logout.svg"
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
