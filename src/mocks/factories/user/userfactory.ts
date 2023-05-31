import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { UserCredentials, UserTokenStructure } from "../../../store/user/types";

const userCredentialsFactory = Factory.define<UserCredentials>(() => ({
  username: faker.person.firstName(),
  password: faker.string.alphanumeric(),
}));

const userFactory = Factory.define<UserTokenStructure>(() => ({
  id: faker.number.int.toString(),
  name: faker.person.firstName(),
  token: faker.string.alphanumeric(),
}));

export const getUserCredentialsMock = () => userCredentialsFactory.build();

export const getUserTokenData = () => userFactory.build();
