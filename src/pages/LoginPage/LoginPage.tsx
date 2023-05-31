import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
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
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
