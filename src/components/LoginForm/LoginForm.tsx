import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginFormProps {
  handleOnSubmit: () => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const initialCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(initialCredentials);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const isReady =
    userCredentials.username !== "" && userCredentials.password !== "";

  const handleOnClick = () => {
    event?.preventDefault();
    handleOnSubmit();
    setUserCredentials(initialCredentials);
  };

  return (
    <LoginFormStyled
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={handleOnClick}
    >
      <input
        type="text"
        placeholder="USERNAME"
        className="form__controls"
        id="username"
        value={userCredentials.username}
        onChange={onChangeData}
      />
      <input
        type="password"
        id="password"
        placeholder="PASSWORD"
        className="form__controls"
        value={userCredentials.password}
        onChange={onChangeData}
      />
      <button
        type="submit"
        className="form__button"
        disabled={!isReady}
        onClick={handleOnSubmit}
      >
        login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
