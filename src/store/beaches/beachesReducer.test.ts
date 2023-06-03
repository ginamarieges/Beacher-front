import { getBeachesMock } from "../../mocks/factories/beach/beachFactory";
import { beachesReducer, loadBeachesActionCreator } from "./beachesSlice";
import { BeachStateStructure } from "./types";

describe("Given a loadBeaches reducer", () => {
  describe("When it receives an empty list of beaches and a list of two beaches", () => {
    test("Then it should return a list of these tow beaches", () => {
      const beachList = getBeachesMock(2);
      const currentBeachesState: BeachStateStructure = {
        beaches: [],
      };
      const expectedNewState: BeachStateStructure = {
        beaches: beachList,
      };

      const action = loadBeachesActionCreator(beachList);

      const newBeachesState = beachesReducer(currentBeachesState, action);

      expect(newBeachesState).toStrictEqual(expectedNewState);
    });
  });
});
