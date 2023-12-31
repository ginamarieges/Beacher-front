import axios from "axios";
import {
  BeachAddStructure,
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
  const { region } = useAppSelector((state) => state.beachesStore);
  const page = useAppSelector((state) => state.uiStore.page);

  const dispatch = useAppDispatch();

  const getBeaches = useCallback(async (): Promise<
    Pick<BeachStateStructure, "beaches" | "length"> | undefined
  > => {
    try {
      dispatch(showLoaderActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const {
        data: { beaches, length },
      } = await axios.get<{
        beaches: BeachStructure[];
        length: number;
      }>(`${apiUrl}/beaches/?page=${page}&region=${region}`, request);

      dispatch(hideLoaderActionCreator());

      return { beaches, length };
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: responseData.errorList,
          isVisible: true,
        })
      );
    }
  }, [apiUrl, dispatch, page, region, token]);

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
      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: responseData.errorBeachDeleted,
          isVisible: true,
        })
      );

      throw error;
    }
  };

  const addBeach = async (
    beachData: BeachAddStructure
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
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: responseData.errorBeachAdded,
        })
      );

      throw (error as Error).message;
    }
  };

  const getBeach = useCallback(
    async (id: string): Promise<BeachStructure | undefined> => {
      try {
        dispatch(showLoaderActionCreator());
        const request = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const {
          data: { beach },
        } = await axios.get<{ beach: BeachStructure }>(
          `${apiUrl}/beaches/${id}`,
          request
        );

        dispatch(hideLoaderActionCreator());

        return beach;
      } catch (error) {
        dispatch(hideLoaderActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            isVisible: true,
            message: responseData.beachNotFound,
          })
        );

        throw error;
      }
    },
    [apiUrl, dispatch, token]
  );

  const updateBeach = async (beachData: BeachStructure): Promise<void> => {
    try {
      dispatch(showLoaderActionCreator());

      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.put<{ newBeach: BeachStructure }>(
        `${apiUrl}/beaches`,
        beachData,
        request
      );
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          isVisible: true,
          message: responseData.beachUpdated,
        })
      );
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: responseData.errorBeachUpdate,
        })
      );

      throw error;
    }
  };

  return { getBeaches, deleteBeach, addBeach, getBeach, updateBeach };
};

export default useBeaches;
