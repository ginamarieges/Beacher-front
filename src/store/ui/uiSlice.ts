import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

const initialState: UiStructure = {
  isLoading: false,
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
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
