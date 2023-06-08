import axios from "axios";
import { UserCredentials } from "../../store/user/types";
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

  return { getUserToken };
};

export default useUser;
