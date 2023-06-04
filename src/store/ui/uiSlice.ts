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
  },
});

export const { showLoader: showLoaderActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
