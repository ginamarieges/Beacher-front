import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { BeachStructure } from "../../../store/beaches/types";

export const beachFactory = Factory.define<BeachStructure>(() => ({
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
  users: faker.string.alphanumeric(),
  addServices: faker.word.adjective(),
  id: faker.string.alphanumeric(),
}));

export const getBeachesMock = (number: number) =>
  beachFactory.buildList(number);
