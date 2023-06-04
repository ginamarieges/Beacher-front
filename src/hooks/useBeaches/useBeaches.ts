import axios from "axios";
import { BeachStateStructure } from "../../store/beaches/types";
import { useAppSelector } from "../../store";

const useBeaches = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = useAppSelector((state) => state.userStore);

  const getBeaches = async () => {
    const request = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const {
      data: { beaches },
    } = await axios.get<{ beaches: BeachStateStructure }>(
      `${apiUrl}/beaches/`,
      request
    );

    return beaches;
  };

  return { getBeaches };
};

export default useBeaches;
