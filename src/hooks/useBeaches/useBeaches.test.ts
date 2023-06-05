import { renderHook } from "@testing-library/react";
import useBeaches from "./useBeaches";
import { mockBeaches } from "../../mocks/beachesMocks";
import { wrapper } from "../../utils/testUtils";
import { BeachStateStructure, BeachStructure } from "../../store/beaches/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { vi } from "vitest";
import { showFeedbackActionCreator } from "../../store/ui/uiSlice";
import { store } from "../../store";

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

      expect((beaches as BeachStateStructure).beaches).toStrictEqual(
        expectedBeaches
      );
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
        })
      );
    });
  });
});
