import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink to={"/home"} className="navbar-list__icon" aria-label="home">
            <img src="./img/home.svg" alt="home icon" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/add-beach"}
            className="navbar-list__icon"
            aria-label="add-beach"
          >
            <img
              src="./img/add.svg"
              alt="add beach icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <button className="navbar-list__icon" aria-label="logout">
            <img
              src="./img/logout.svg"
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
