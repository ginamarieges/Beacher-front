import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import {
  UserCredentials,
  UserTokenData,
  UserTokenStructure,
} from "../../../store/user/types";

const userCredentialsFactory = Factory.define<UserCredentials>(() => ({
  username: faker.person.firstName(),
  password: faker.string.alphanumeric(),
}));

const userFactory = Factory.define<UserTokenStructure>(() => ({
  id: faker.number.int.toString(),
  name: faker.person.firstName(),
  token: faker.string.alphanumeric(),
}));

const userLogedIn = Factory.define<UserTokenData>(() => ({
  id: faker.number.int.toString(),
  isLogged: true,
  name: faker.person.firstName(),
  token: faker.string.alphanumeric(),
}));

export const getUserCredentialsMock = () => userCredentialsFactory.build();

export const getUserTokenData = () => userFactory.build();

export const getUserMock = (data?: Partial<UserTokenData>) =>
  userLogedIn.build(data);
