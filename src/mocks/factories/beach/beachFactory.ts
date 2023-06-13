import { Factory } from "fishery";
import { Types } from "mongoose";
import { faker } from "@faker-js/faker";
import {
  BeachAddStructure,
  BeachStructure,
} from "../../../store/beaches/types";

export const beachFactory = Factory.define<BeachStructure>(() => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
  region: faker.location.county(),
  town: faker.location.city(),
  services: {
    baywatch: faker.datatype.boolean(),
    dogsAllowed: faker.datatype.boolean(),
    familyBeach: faker.datatype.boolean(),
    restaurant: faker.datatype.boolean(),
    secretBeach: faker.datatype.boolean(),
    showers: faker.datatype.boolean(),
    umbrellas: faker.datatype.boolean(),
  },
  user: faker.string.alphanumeric(),
  addServices: faker.word.adjective(),
  id: new Types.ObjectId().toString(),
}));

export const beachesFactory = Factory.define<BeachAddStructure>(() => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.dataUri(),
  region: faker.location.county(),
  town: faker.location.city(),
  services: {
    baywatch: faker.datatype.boolean(),
    dogsAllowed: faker.datatype.boolean(),
    familyBeach: faker.datatype.boolean(),
    restaurant: faker.datatype.boolean(),
    secretBeach: faker.datatype.boolean(),
    showers: faker.datatype.boolean(),
    umbrellas: faker.datatype.boolean(),
  },
  addServices: faker.word.adjective(),
}));

export const getBeachesMock = (
  number: number,
  data?: Partial<BeachStructure>
) => beachFactory.buildList(number, data);

export const getBeachMock = (data?: Partial<BeachStructure>) =>
  beachFactory.build(data);

export const getBeachesDataMock = (
  number: number,
  data?: Partial<BeachAddStructure>
) => beachesFactory.buildList(number, data);

export const getBeachDataMock = (data?: Partial<BeachAddStructure>) =>
  beachesFactory.build(data);
