import {
  getBeachMock,
  getBeachesDataMock,
  getBeachesMock,
} from "./factories/beach/beachFactory";

export const mockBeaches = getBeachesMock(3);

export const mockBeachesData = getBeachesDataMock(3);

export const mockedBeach = getBeachMock({ id: "4" });
mockBeaches.push(mockedBeach);
