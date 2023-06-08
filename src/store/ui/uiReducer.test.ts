import { UiFeedback, UiStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "./uiSlice";
import { uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it receives a ui state with the property isLoading false", () => {
    test("Then it should return a new state with isLoading true", () => {
      const currentState: UiStructure = {
        isLoading: false,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };
      const expectedNewState: UiStructure = {
        isLoading: true,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };
      const action = showLoaderActionCreator();

      const newState = uiReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a hideLoader reducer", () => {
  describe("When it receives a ui state with the property isLoading true", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentState: UiStructure = {
        isLoading: true,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };
      const expectedNewState: UiStructure = {
        isLoading: false,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };
      const action = hideLoaderActionCreator();

      const newState = uiReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a showFeedback reducer", () => {
  describe("When it receives a ui state with the message 'Wrong' and isError true", () => {
    test("Then it should return a new state with the message 'Wrong' and isError true", () => {
      const currentState: UiStructure = {
        isLoading: true,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };
      const errorMessage = "Wrong";
      const error: UiFeedback = {
        isError: true,
        message: errorMessage,
        isVisible: true,
      };
      const expectedNewState: UiStructure = {
        ...currentState,
        modal: {
          isVisible: error.isVisible,
          isError: error.isError,
          message: error.message,
        },
      };

      const action = showFeedbackActionCreator(error);

      const newState = uiReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a hideFeedback reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the state to initialState", () => {
      const currentState: UiStructure = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong",
          isVisible: true,
        },
      };
      const expectedNewState: UiStructure = {
        modal: {
          isError: false,
          message: "",
          isVisible: false,
        },
        isLoading: false,
      };
      const newState = uiReducer(currentState, hideFeedbackActionCreator());

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
