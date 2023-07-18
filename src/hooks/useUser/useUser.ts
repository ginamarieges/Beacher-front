import axios from "axios";
import { RegisterUserStructure, UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import { responseData } from "../../utils/responseData";

const useUser = () => {
  const dispatch = useAppDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoaderActionCreator());
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );
      dispatch(hideLoaderActionCreator());
      return token;
    } catch {
      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: responseData.wrongCredentials,
          isVisible: true,
        })
      );
    }
  };

  const registerUser = async (
    userData: RegisterUserStructure
  ): Promise<void> => {
    try {
      dispatch(showLoaderActionCreator());

      const { data } = await axios.post(`${apiUrl}/user/register`, userData);

      dispatch(hideLoaderActionCreator());

      return data;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: responseData.errorRegister,
        })
      );

      throw (error as Error).message;
    }
  };

  return { getUserToken, registerUser };
};

export default useUser;
