import axios from "axios";
import { BeachStateStructure } from "../../store/beaches/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const useBeaches = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const getBeaches = useCallback(async (): Promise<BeachStateStructure> => {
    try {
      dispatch(showLoaderActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data: beaches } = await axios.get<BeachStateStructure>(
        `${apiUrl}/beaches`,
        request
      );
      dispatch(hideLoaderActionCreator());
      return beaches;
    } catch {
      throw new Error("Can't get the list of beaches");
    }
  }, [apiUrl, dispatch, token]);

  return { getBeaches };
};

export default useBeaches;
