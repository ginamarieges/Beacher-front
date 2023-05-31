import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/userMocks";
import useLocalStorage from "./useLocalStorage";

describe("Given a setToken and a getToken function", () => {
  describe("When it receives the key 'token' and the token 'wiey8rf9e7iosurndfpsw48eimtufpjc8o4ethxawr'", () => {
    test("Then it should save the token value in the local storage", () => {
      const token = tokenMock;
      const key = "token";
      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, token);

      expect(getToken(key)).toBe(token);
    });
  });
});
