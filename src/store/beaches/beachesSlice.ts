import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BeachStateStructure, BeachStructure } from "./types";

const initialState: BeachStateStructure = {
  beaches: [],
};
const beachesSlice = createSlice({
  name: "beaches",
  initialState,
  reducers: {
    loadBeaches: (
      currentState: BeachStateStructure,
      action: PayloadAction<BeachStructure[]>
    ): BeachStateStructure => ({
      ...currentState,
      beaches: [...action.payload],
    }),
  },
});

export const { loadBeaches: loadBeachesActionCreator } = beachesSlice.actions;
export const beachesReducer = beachesSlice.reducer;

export default beachesSlice;
