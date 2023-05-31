import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="form">
      <input type="text" placeholder="USERNAME" className="form__controls" />
      <input
        type="password"
        placeholder="PASSWORD"
        className="form__controls"
      />
      <button type="submit" className="form__button">
        login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
