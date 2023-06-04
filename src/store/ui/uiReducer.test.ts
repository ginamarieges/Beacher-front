import { UiStructure } from "./types";
import { hideLoaderActionCreator, showLoaderActionCreator } from "./uiSlice";
import { uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it receives a ui state with the property isLoading false", () => {
    test("Then it should return a new state with isLoading true", () => {
      const currentState: UiStructure = {
        isLoading: false,
      };
      const expectedNewState: UiStructure = { isLoading: true };
      const action = showLoaderActionCreator();

      const newState = uiReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it receives a ui state with the property isLoading true", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentState: UiStructure = {
        isLoading: true,
      };
      const expectedNewState: UiStructure = { isLoading: false };
      const action = hideLoaderActionCreator();

      const newState = uiReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
