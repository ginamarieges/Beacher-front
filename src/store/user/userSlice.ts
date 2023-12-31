import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTokenData, UserTokenStructure } from "./types";

const initialState: UserTokenData = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      _currentState: UserTokenData,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: () => ({
      ...initialState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
