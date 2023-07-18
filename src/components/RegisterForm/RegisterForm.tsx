import { useState } from "react";
import { RegisterUserStructure } from "../../store/user/types";
import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterProps {
  handleSubmit: (userData: RegisterUserStructure) => void;
}

const RegisterForm = ({ handleSubmit }: RegisterProps): React.ReactElement => {
  const initialUserData: RegisterUserStructure = {
    email: "",
    name: "",
    password: "",
    username: "",
    surname: "",
    repeatPassword: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(userData);
    setUserData(initialUserData);
  };
  const isSamePassword =
    userData.repeatPassword !== "" &&
    userData.repeatPassword === userData.password;

  const isReady =
    userData.name !== "" &&
    userData.surname !== "" &&
    userData.email !== "" &&
    userData.password !== "" &&
    userData.username !== "" &&
    isSamePassword;

  return (
    <RegisterFormStyled
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={handleOnClick}
    >
      <input
        type="text"
        placeholder="NAME"
        className="form__controls"
        id="name"
        value={userData.name}
        onChange={onChangeData}
      />
      <input
        type="text"
        placeholder="SURNAME"
        className="form__controls"
        id="surname"
        value={userData.surname}
        onChange={onChangeData}
      />
      <input
        type="text"
        placeholder="EMAIL"
        className="form__controls"
        id="email"
        value={userData.email}
        onChange={onChangeData}
      />
      <input
        type="text"
        placeholder="USERNAME"
        className="form__controls"
        id="username"
        value={userData.username}
        onChange={onChangeData}
      />
      <input
        type="password"
        id="password"
        placeholder="PASSWORD"
        className="form__controls"
        value={userData.password}
        onChange={onChangeData}
      />

      <input
        type="password"
        id="repeatPassword"
        placeholder="REPEAT PASSWORD"
        className={`form__controls form__controls${
          !isSamePassword ? `--wrong` : ""
        }`}
        value={userData.repeatPassword}
        onChange={onChangeData}
      />
      <span className="message" hidden={isSamePassword}>
        The passwords do not match
      </span>
      <button
        type="submit"
        className="form__button"
        disabled={!isReady}
        onClick={() => handleOnClick}
      >
        register
      </button>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
