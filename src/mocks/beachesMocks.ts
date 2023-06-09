import {
  getBeachDataMock,
  getBeachMock,
  getBeachesDataMock,
  getBeachesMock,
} from "./factories/beach/beachFactory";

export const mockBeaches = getBeachesMock(3);

export const mockBeachesData = getBeachesDataMock(3);

export const mockedBeach = getBeachMock({ id: "4" });
mockBeaches.push(mockedBeach);

export const mockedBeachToAdd = getBeachDataMock({
  name: "Cala Pedrosa",
});

export const mockedAddBeach = getBeachMock({
  ...mockedBeachToAdd,
  id: "6482015b26bad9c95da111bf",
  users: "646f981a0056a93b408c5050",
});
