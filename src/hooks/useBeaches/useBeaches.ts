import axios from "axios";
import { BeachStateStructure } from "../../store/beaches/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const useBeaches = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const getBeaches = useCallback(async (): Promise<
    BeachStateStructure | undefined
  > => {
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
      const error = new Error("Can't get the list of beaches");
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: error.message,
        })
      );
    }
  }, [apiUrl, dispatch, token]);

  return { getBeaches };
};

export default useBeaches;
