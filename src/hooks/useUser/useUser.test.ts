import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { UserCredentials } from "../../store/user/types";
import { userCredentialsMock } from "../../mocks/userMocks";
import { tokenMock } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useUser function", () => {
  const userCredentials: UserCredentials = userCredentialsMock;
  describe("When the getUserToken function is called with a username and a password", () => {
    test("Then it should return a token", async () => {
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

  describe("When the getUserToken function is called with a valid username and an invalid password", () => {
    test("Then it should return the response method status with a 401", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const getToken = async () => {
        await getUserToken(userCredentials);
      };

      expect(getToken).rejects.toThrowError();
    });
  });
});
