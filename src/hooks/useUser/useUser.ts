import axios from "axios";
import { UserCredentials } from "../../store/user/types";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        userCredentials
      );

      return token;
    } catch {
      throw new Error("Wrong credentials");
    }
  };

  return { getUserToken };
};

export default useUser;
