import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useUser from "../../hooks/useUser/useUser";
import { paths } from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice";
import { RegisterUserStructure } from "../../store/user/types";
import { responseData } from "../../utils/responseData";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): React.ReactElement => {
  const { registerUser } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userData: RegisterUserStructure) => {
    await registerUser(userData);

    dispatch(
      showFeedbackActionCreator({
        isError: false,
        isVisible: true,
        message: responseData.userRegistered,
      })
    );

    navigate(paths.login);
  };

  return (
    <RegisterPageStyled>
      <h1 className="app-title">Beacher</h1>
      <h2 className="register-title">Register now!</h2>
      <RegisterForm handleSubmit={onSubmit} />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
