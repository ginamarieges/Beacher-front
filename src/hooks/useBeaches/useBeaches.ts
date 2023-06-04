import axios from "axios";
import { BeachStateStructure } from "../../store/beaches/types";
import { useAppSelector } from "../../store";

const useBeaches = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = useAppSelector((state) => state.userStore);

  const getBeaches = async (): Promise<BeachStateStructure> => {
    try {
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data: beaches } = await axios.get<BeachStateStructure>(
        `${apiUrl}/beaches`,
        request
      );

      return beaches;
    } catch {
      throw new Error("Can't get the list of beaches");
    }
  };

  return { getBeaches };
};

export default useBeaches;
