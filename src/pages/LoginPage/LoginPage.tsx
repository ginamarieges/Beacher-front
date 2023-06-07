import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials, UserTokenStructure } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";
import { paths } from "../../routers/paths/paths";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import useToken from "../../hooks/useToken/useToken";
import { loginUserActionCreator } from "../../store/user/userSlice";

const LoginPage = (): React.ReactElement => {
  const { setToken } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);
    if (!token) {
      return;
    }
    const userData = getTokenData(token);
    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };
    setToken("token", token);
    dispatch(loginUserActionCreator(tokenData));
    navigate(paths.home);
  };

  return (
    <LoginPageStyled>
      <img
        src="./img/logo.svg"
        alt="Beacher logo"
        width={90}
        height={90}
        className="app-logo"
      />
      <h1 className="app-title">Beacher</h1>
      <LoginForm handleOnSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
