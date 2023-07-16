import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): React.ReactElement => {
  return (
    <RegisterPageStyled>
      <h1 className="app-title">Beacher</h1>
      <h2 className="register-title">Register now!</h2>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
