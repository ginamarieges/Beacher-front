import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/userMocks";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a setToken function", () => {
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

describe("Given a getToken function", () => {
  describe("When it receives the key 'token' and exists a key 'token' in the local storage", () => {
    test("Then it should get the token of the localStorage", () => {
      const tokenInStorage = tokenMock;
      const key = "token";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useLocalStorage());

      localStorage.setItem(key, tokenInStorage);

      const token = getToken(key);

      expect(token).toBe(tokenInStorage);
    });
  });
});

describe("Given a removeToken function", () => {
  describe("When it receives the key 'token'", () => {
    test("Then it should remove this key from the local storage", () => {
      const tokenInStorage = tokenMock;
      const key = "token";

      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useLocalStorage());

      localStorage.setItem(key, tokenInStorage);

      removeToken(key);

      expect(localStorage.getItem(key)).toBeNull();
    });
  });
});
