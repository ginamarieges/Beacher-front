import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { UserTokenStructure } from "../../store/user/types";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const App = (): React.ReactElement => {
  const { isLoading, message } = useAppSelector((state) => state.uiStore);
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (!token) {
      return;
    }
    const userData = getTokenData(token);
    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };
    dispatch(loginUserActionCreator(tokenData));
  }, [dispatch, getToken, getTokenData]);

  return (
    <>
      <Layout />
      {message && <Modal />}
      {isLoading && <Loader />}
    </>
  );
};

export default App;
