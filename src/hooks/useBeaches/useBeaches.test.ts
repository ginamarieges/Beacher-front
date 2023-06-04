import { renderHook } from "@testing-library/react";
import useBeaches from "./useBeaches";
import { mockBeaches } from "../../mocks/beachesMocks";
import { wrapper } from "../../utils/testUtils";
import { BeachStructure } from "../../store/beaches/types";

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
});
