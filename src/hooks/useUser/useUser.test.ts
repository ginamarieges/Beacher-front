import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { RegisterUserStructure, UserCredentials } from "../../store/user/types";
import { registerUserMock, userCredentialsMock } from "../../mocks/userMocks";
import { tokenMock } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapper } from "../../utils/testUtils";
import { store } from "../../store";
import { responseData } from "../../utils/responseData";

describe("Given a useUser function", () => {
  const userCredentials: UserCredentials = userCredentialsMock;
  describe("When the getUserToken function is called with a username and a password", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(userCredentials);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When the getUserToken function is called with a valid username and an invalid password", () => {
    test("Then it should return the response method status with a 401", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      await getUserToken(userCredentials);

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.wrongCredentials);
    });
  });

  describe("When the registerUser function is called with joana's data", () => {
    test("Then it should return joana's data with an id", async () => {
      const userData: RegisterUserStructure = {
        email: "joana@gmail.com",
        name: "Joana",
        password: "aloha",
        repeatPassword: "aloha",
        surname: "Garcia",
        username: "esealoha",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const newUser = await registerUser(userData);

      const expectedUser = registerUserMock;

      expect(newUser).toStrictEqual({ newUser: expectedUser });
    });
  });

  describe("When the registerUser function is called with joana's invalid data", () => {
    test("Then it should show the message 'Couldn't create an account'", async () => {
      server.resetHandlers(...errorHandlers);

      const userData: RegisterUserStructure = {
        email: "joana@gmail.com",
        name: "Joana",
        password: "aloha",
        repeatPassword: "aloha",
        surname: "Garcia",
        username: "esealoha",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      let hasError = false;

      try {
        await registerUser(userData);
      } catch (error) {
        hasError = true;
      }

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.errorRegister);
      expect(hasError).toBe(true);
    });
  });
});
