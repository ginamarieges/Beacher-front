import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { UserCredentials } from "../../store/user/types";
import { userCredentialsMock } from "../../mocks/userMocks";
import { tokenMock } from "../../mocks/userMocks";

describe("Given a useUser function", () => {
  describe("When the getUserToken function is called with a username and a password", () => {
    test("Then it should return a token", async () => {
      const userCredentials: UserCredentials = userCredentialsMock;
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });
});
