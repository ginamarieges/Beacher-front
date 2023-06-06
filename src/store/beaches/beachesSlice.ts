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

    deleteBeach: (
      currentState: BeachStateStructure,
      action: PayloadAction<string>
    ): BeachStateStructure => ({
      ...currentState,
      beaches: currentState.beaches.filter(
        (beach) => beach.id !== action.payload
      ),
    }),
  },
});

export const { loadBeaches: loadBeachesActionCreator } = beachesSlice.actions;
export const beachesReducer = beachesSlice.reducer;

export default beachesSlice;
