import {
  getBeachMock,
  getBeachesMock,
} from "../../mocks/factories/beach/beachFactory";
import {
  addBeachActionCreator,
  beachesReducer,
  deleteBeachActionCreator,
  loadBeachesActionCreator,
} from "./beachesSlice";
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

describe("Given a deleteBeach reducer", () => {
  describe("When it receives a beach id and a list of two beaches", () => {
    test("Then it should return only one beach", () => {
      const beachList = getBeachesMock(2);
      const currentBeachesState: BeachStateStructure = {
        beaches: beachList,
      };
      const expectedNewState: BeachStateStructure = {
        beaches: [beachList[1]],
      };

      const action = deleteBeachActionCreator(beachList[0].id as string);
      const newState = beachesReducer(currentBeachesState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a addBeach reducer", () => {
  describe("When it receives Cala Pedrosa beach and a list of 3 beaches", () => {
    test("Then it should return a list of 4 beaches with Cala Pedrosa in it", () => {
      const beachList = getBeachesMock(3);
      const beachToAdd = getBeachMock({ name: "Cala Pedrosa" });
      const currentBeachesState: BeachStateStructure = {
        beaches: beachList,
      };
      const expectedNewState: BeachStateStructure = {
        beaches: [...beachList, beachToAdd],
      };

      const action = addBeachActionCreator(beachToAdd);
      const newState = beachesReducer(currentBeachesState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
