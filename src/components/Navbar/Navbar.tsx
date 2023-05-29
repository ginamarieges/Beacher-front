import { NavLink } from "react-router-dom";

const Navbar = (): React.ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/home"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M40 21.4719V37C40 39.7614 37.7615 42 35 42H29C28.4477 42 28 41.5523 28 41V29C28 28.4477 27.5523 28 27 28H21C20.4477 28 20 28.4477 20 29V41C20 41.5523 19.5523 42 19 42H13C10.2386 42 8.00003 39.7614 8.00003 37V21.4719L7.63574 21.7719C7.20941 22.123 6.57919 22.062 6.2281 21.6357C5.87701 21.2094 5.938 20.5792 6.36432 20.2281L23.3643 6.22807C23.7336 5.92398 24.2665 5.92398 24.6357 6.22807L41.6357 20.2281C42.0621 20.5792 42.1231 21.2094 41.772 21.6357C41.4209 22.062 40.7906 22.123 40.3643 21.7719L40 21.4719ZM38.0134 19.8359L24 8.29545L9.98663 19.8359C9.99544 19.8893 10 19.9441 10 20V37C10 38.6569 11.3432 40 13 40H18V29C18 27.3431 19.3432 26 21 26H27C28.6569 26 30 27.3431 30 29V40H35C36.6569 40 38 38.6569 38 37V20C38 19.9441 38.0046 19.8893 38.0134 19.8359Z"
                fill="#564137"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add-beach"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M19.1667 20.8333V35.8333H20.8334V20.8333H35.8334V19.1667H20.8334V4.16666H19.1667V19.1667H4.16675V20.8333H19.1667Z"
                fill="#564137"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M34.8789 29.24L39.9989 24.12L34.8789 19"
                stroke="#564137"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5195 24.1201H39.8595"
                stroke="#564137"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.5195 40C14.6795 40 7.51953 34 7.51953 24C7.51953 14 14.6795 8 23.5195 8"
                stroke="#564137"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
