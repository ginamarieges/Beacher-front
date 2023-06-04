import { renderHook } from "@testing-library/react";
import useBeaches from "./useBeaches";
import { mockBeaches } from "../../mocks/beachesMocks";
import { wrapper } from "../../utils/testUtils";
import { BeachStructure } from "../../store/beaches/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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

      expect(beaches.beaches).toStrictEqual(expectedBeaches);
    });
  });

  describe("When the getBeaches function rejects", () => {
    test("Then it should throw the 'Can't get the list of beaches' error", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getBeaches },
        },
      } = renderHook(() => useBeaches(), { wrapper: wrapper });

      expect(getBeaches()).rejects.toThrowError();
    });
  });
});
