import { userMock } from "../../mocks/userMocks";
import { UserTokenData, UserTokenStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives a user data", () => {
    test("Then it should returen the user data logged in", () => {
      const user: UserTokenStructure = userMock;

      const currentUserData: UserTokenStructure = {
        id: "",
        name: "",
        token: "",
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
