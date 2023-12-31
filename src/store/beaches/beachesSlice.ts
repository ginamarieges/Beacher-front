import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BeachStateStructure, BeachStructure } from "./types";

const initialState: BeachStateStructure = {
  length: 0,
  beaches: [],
  region: "",
  beach: {
    image: "",
    name: "",
    region: "",
    town: "",
    id: "",
    description: "",
    addServices: "",
    services: {
      baywatch: false,
      dogsAllowed: false,
      familyBeach: false,
      restaurant: false,
      secretBeach: false,
      showers: false,
      umbrellas: false,
    },
    user: "",
  },
};
const beachesSlice = createSlice({
  name: "beaches",
  initialState,
  reducers: {
    loadBeaches: (
      currentState: BeachStateStructure,
      action: PayloadAction<Pick<BeachStateStructure, "beaches" | "length">>
    ): BeachStateStructure => ({
      ...currentState,
      beaches: action.payload.beaches,
      length: action.payload.length,
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
      currentState: BeachStateStructure,
      action: PayloadAction<BeachStructure>
    ): BeachStateStructure => ({
      ...currentState,
      beach: action.payload,
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
