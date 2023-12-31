import { renderHook } from "@testing-library/react";
import useBeaches from "./useBeaches";
import {
  mockBeaches,
  mockedAddBeach,
  mockedBeachToAdd,
} from "../../mocks/beachesMocks";
import { wrapper } from "../../utils/testUtils";
import { BeachStructure } from "../../store/beaches/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { vi } from "vitest";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice.js";
import { store } from "../../store";
import { responseData } from "../../utils/responseData.js";

describe("Given a useBeaches function", () => {
  describe("When the getBeaches function is called", () => {
    test("Then it should return a list of beaches", async () => {
      const expectedBeaches: BeachStructure[] = mockBeaches;
      const {
        result: {
          current: { getBeaches },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      const beaches = await getBeaches();

      expect(beaches?.beaches).toStrictEqual(expectedBeaches);
    });
  });

  describe("When the getBeaches function rejects", () => {
    test("Then it should throw the 'Can't get the list of beaches' error", async () => {
      server.resetHandlers(...errorHandlers);

      const dispatch = vi.spyOn(store, "dispatch");
      const error = new Error("Can't get the list of beaches");

      const {
        result: {
          current: { getBeaches },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      await getBeaches();

      expect(dispatch).toHaveBeenCalledWith(
        showFeedbackActionCreator({
          isError: true,
          message: error.message,
          isVisible: true,
        })
      );
    });
  });

  describe("When the deleteBeach function is called and receives a valid beach id", () => {
    test("Then the feedback message should be in the store", async () => {
      const {
        result: {
          current: { deleteBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      await deleteBeach(mockBeaches[2].id);

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.beachDeleted);
    });
  });

  describe("When the deleteBeach function is called and receives an invalid beach id", () => {
    test("Then the error feedback message should be in the store", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { deleteBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      let hasError = false;

      try {
        await deleteBeach(mockBeaches[1].id);
      } catch (error) {
        hasError = true;
      }

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.errorBeachDeleted);
      expect(hasError).toBe(true);
    });
  });

  describe("When the addBeach function is called and receives Cala Pedrosa beach", () => {
    test("Then it should return the Cala Pedrosa beach", async () => {
      const expectedBeach = mockedAddBeach;
      const {
        result: {
          current: { addBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      const newBeach = await addBeach(mockedBeachToAdd);

      expect(newBeach).toStrictEqual(expectedBeach);
    });
  });

  describe("When the addBeach function is called and rejects", () => {
    test("Then the error 'Couldn't add your beach' should be in the store", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedMessage = "Couldn't add your beach";
      let hasError = false;

      const {
        result: {
          current: { addBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      try {
        await addBeach(mockedBeachToAdd);
      } catch (error) {
        hasError = true;
      }

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(expectedMessage);
      expect(hasError).toBe(true);
    });
  });

  describe("When the getBeach function is called and receives the id '6482015b26bad9c95da111bf'", () => {
    test("Then it should return the beach with id '6482015b26bad9c95da111bf'", async () => {
      const expectedBeach = mockedAddBeach;
      const id = "6482015b26bad9c95da111bf";

      const {
        result: {
          current: { getBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      const newBeach = await getBeach(id);

      expect(newBeach).toStrictEqual(expectedBeach);
    });
  });

  describe("When the getBeach function is called and receives an id of a beach that doesn't exist", () => {
    test("Then the error 'Beach not found' should be in the store", async () => {
      server.resetHandlers(...errorHandlers);
      const id = "6482015b26bad9c95da511bf";
      const {
        result: {
          current: { getBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      let hasError = false;

      try {
        await getBeach(id);
      } catch (error) {
        hasError = true;
      }

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.beachNotFound);
      expect(hasError).toBe(true);
    });
  });

  describe("When the updateBeach function is called with Cala Pedrosa beach data to update", () => {
    test("Then it should show the message 'Beach updated' in the modal", async () => {
      const beachData = mockedAddBeach;
      const {
        result: {
          current: { updateBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      await updateBeach(beachData);

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.beachUpdated);
    });
  });

  describe("When the updateBeach function is calledwith an invalid beach data", () => {
    test("Then the error 'Beach not found' should be in the store", async () => {
      server.resetHandlers(...errorHandlers);
      const beachData = mockedAddBeach;
      const {
        result: {
          current: { updateBeach },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });
      let hasError = false;

      try {
        await updateBeach(beachData);
      } catch (error) {
        hasError = true;
      }

      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(responseData.errorBeachUpdate);
      expect(hasError).toBe(true);
    });
  });
});
