import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice";
import { responseData } from "../../utils/responseData";

const useUser = () => {
  const dispatch = useAppDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return token;
    } catch {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: responseData.wrongCredentials,
        })
      );
    }
  };

  return { getUserToken };
};

export default useUser;
