import axios from "axios";
import {
  BeachDataStructure,
  BeachStateStructure,
  BeachStructure,
} from "../../store/beaches/types";
import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import { responseData } from "../../utils/responseData.js";

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
      const error = new Error(responseData.errorList);
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: error.message,
          isVisible: true,
        })
      );
    }
  }, [apiUrl, dispatch, token]);

  const deleteBeach = async (id: string): Promise<void> => {
    try {
      dispatch(showLoaderActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete<number>(`${apiUrl}/beaches/delete/${id}`, request);

      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: responseData.beachDeleted,
          isVisible: true,
        })
      );
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: responseData.errorBeachDeleted,
          isVisible: true,
        })
      );
    }
  };

  const addBeach = async (
    beachData: BeachDataStructure
  ): Promise<BeachStructure | undefined> => {
    try {
      dispatch(showLoaderActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const {
        data: { newBeach },
      } = await axios.post<{ newBeach: BeachStructure }>(
        `${apiUrl}/beaches`,
        beachData,
        request
      );
      dispatch(hideLoaderActionCreator());

      return newBeach;
    } catch {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: responseData.errorBeachAdded,
        })
      );
    }
  };

  return { getBeaches, deleteBeach, addBeach };
};

export default useBeaches;
