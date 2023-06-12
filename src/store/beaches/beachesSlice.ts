import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BeachStateStructure, BeachStructure } from "./types";

const initialState: BeachStateStructure = {
  beaches: [],
  region: "",
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

    loadFilterBeaches: (
      currentState: BeachStateStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      region: action.payload,
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

    addBeach: (
      currentState: BeachStateStructure,
      action: PayloadAction<BeachStructure>
    ): BeachStateStructure => ({
      ...currentState,
      beaches: [...currentState.beaches, action.payload],
    }),

    loadBeachById: (
      _currentState: BeachStateStructure,
      action: PayloadAction<BeachStructure>
    ): BeachStateStructure => ({
      beaches: [action.payload],
    }),
  },
});

export const {
  loadBeaches: loadBeachesActionCreator,
  deleteBeach: deleteBeachActionCreator,
  addBeach: addBeachActionCreator,
  loadFilterBeaches: filterActionCreator,
  loadBeachById: loadBeachByIdActionCreator,
} = beachesSlice.actions;
export const beachesReducer = beachesSlice.reducer;

export default beachesSlice;
