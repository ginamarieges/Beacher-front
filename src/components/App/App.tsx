import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { UserTokenStructure } from "../../store/user/types";
import ScrollUp from "../../utils/ScrollUp";

const App = (): React.ReactElement => {
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
      <ScrollUp />
      <Layout />
    </>
  );
};

export default App;
