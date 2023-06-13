import {
  getBeachMock,
  getBeachesMock,
} from "../../mocks/factories/beach/beachFactory";
import {
  addBeachActionCreator,
  beachesReducer,
  deleteBeachActionCreator,
  filterActionCreator,
  loadBeachByIdActionCreator,
  loadBeachesActionCreator,
} from "./beachesSlice";
import { BeachStateStructure } from "./types";

describe("Given a loadBeaches reducer", () => {
  describe("When it receives an empty list of beaches and a list of two beaches", () => {
    test("Then it should return a list of these tow beaches", () => {
      const beachList = getBeachesMock(2);
      const currentBeachesState: BeachStateStructure = {
        beaches: [],
        length: 0,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };
      const expectedNewState: BeachStateStructure = {
        beaches: beachList,
        length: 0,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
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
        length: 0,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };
      const expectedNewState: BeachStateStructure = {
        beaches: [beachList[1]],
        length: 0,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
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
        length: 3,
        beaches: beachList,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };
      const expectedNewState: BeachStateStructure = {
        beaches: [...beachList, beachToAdd],
        length: 3,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };

      const action = addBeachActionCreator(beachToAdd);
      const newState = beachesReducer(currentBeachesState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a loadFilterBeaches reducer", () => {
  describe("When it receives a list of two beaches and the region 'Maresme'", () => {
    test("Then it should return the two beaches with the region Maresme", () => {
      const region = "Maresme";
      const beachList = getBeachesMock(2);
      const currentBeachesState: BeachStateStructure = {
        length: 2,
        beaches: beachList,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };
      const expectedNewState: BeachStateStructure = {
        length: 2,
        beaches: beachList,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
        region,
      };

      const action = filterActionCreator(region);
      const newState = beachesReducer(currentBeachesState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given loadBeachById reducer", () => {
  describe("When it receives a Cala Pedrosa beach", () => {
    test("Then it should return the new state with Cala Pedrosa beach", () => {
      const beachList = getBeachesMock(3);
      const beachToFind = getBeachMock({ name: "Cala Pedrosa" });
      beachList.push(beachToFind);

      const currentBeachesState: BeachStateStructure = {
        length: 3,
        beaches: beachList,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
        },
      };

      const expectedNewState: BeachStateStructure = {
        ...currentBeachesState,
        beach: beachToFind,
      };

      const action = loadBeachByIdActionCreator(beachToFind);
      const newState = beachesReducer(currentBeachesState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
