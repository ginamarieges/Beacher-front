import { getUserMock } from "../../mocks/factories/user/userfactory";
import { userMock } from "../../mocks/userMocks";
import { UserTokenData, UserTokenStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives a user data", () => {
    test("Then it should returen the user data logged in", () => {
      const user: UserTokenStructure = userMock;

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
  describe("When it receives a user data", () => {
    test("Then it should return the same user data with the property isLogged false", () => {
      const userLogged = getUserMock({ isLogged: true, name: "Berta" });
      const expectedNewState: UserTokenData = {
        ...userLogged,
        isLogged: false,
      };

      const userLogedOut = userReducer(
        userLogged,
        logoutUserActionCreator(userLogged)
      );

      expect(userLogedOut).toStrictEqual(expectedNewState);
    });
  });
});
