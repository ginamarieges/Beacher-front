import { getUserMock } from "../../mocks/factories/user/userfactory";
import { UserTokenData, UserTokenStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives a user data", () => {
    test("Then it should returen the user data logged in", () => {
      const user: UserTokenStructure = {
        id: "33",
        name: "gina",
        token: "refuw9a83jredfaowc3peirjfdcm",
      };

      const currentUserData: UserTokenData = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };

      const expectedNewState: UserTokenData = {
        ...user,
        isLogged: true,
      };

      const action = loginUserActionCreator(user);
      const newState = userReducer(currentUserData, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a logoutUser reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the state to initialState", () => {
      const initialState: UserTokenData = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };
      const userLogged = getUserMock({ isLogged: true });
      const expectedNewState: UserTokenData = {
        ...initialState,
      };

      const userLogedOut = userReducer(userLogged, logoutUserActionCreator());

      expect(userLogedOut).toStrictEqual(expectedNewState);
    });
  });
});
