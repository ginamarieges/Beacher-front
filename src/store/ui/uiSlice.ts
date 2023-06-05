import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiFeedback, UiStructure } from "./types";

const initialState: UiStructure = {
  isLoading: false,
  isError: false,
  message: "",
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
      isError: action.payload.isError,
      message: action.payload.message,
    }),

    hideFeedback: () => ({
      ...initialState,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
