import { useState } from "react";
import { UserDataStructure } from "../../store/user/types";

const RegisterForm = (): React.ReactElement => {
  const initialUserData: UserDataStructure = {
    email: "",
    name: "",
    password: "",
    username: "",
    surname: "",
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
    setUserData(initialUserData);
  };

  const isReady =
    userData.name !== "" &&
    userData.surname !== "" &&
    userData.email !== "" &&
    userData.password !== "" &&
    userData.username !== "";

  return (
    <form
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
        className="form__controls"
      />
      <button
        type="submit"
        className="form__button"
        disabled={!isReady}
        onClick={() => handleOnClick}
      >
        register
      </button>
    </form>
  );
};

export default RegisterForm;
