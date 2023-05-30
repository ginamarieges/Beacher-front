import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTokenStructure } from "./types";

const initialState: UserTokenStructure = {
  id: "",
  name: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      _currentState: UserTokenStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
