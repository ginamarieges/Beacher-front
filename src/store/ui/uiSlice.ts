import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiFeedback, UiStructure } from "./types";

const initialState: UiStructure = {
  isLoading: false,
  modal: { isVisible: false, isError: false, message: "" },
  page: 1,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoader: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStructure,
      action: PayloadAction<UiFeedback>
    ) => ({
      ...currentState,
      modal: action.payload,
    }),

    hideFeedback: (currentState: UiStructure) => ({
      ...currentState,
      modal: {
        isError: false,
        isVisible: false,
        message: "",
      },
    }),

    pagination: (currentState: UiStructure, action: PayloadAction<number>) => ({
      ...currentState,
      page: action.payload,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
  pagination: paginationActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
