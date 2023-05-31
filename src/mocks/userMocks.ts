import { UserCredentials, UserTokenStructure } from "../store/user/types";
import {
  getUserCredentialsMock,
  getUserTokenData,
} from "./factories/user/userfactory";

export const userMock: UserTokenStructure = getUserTokenData();

export const tokenMock = "wiey8rf9e7iosurndfpsw48eimtufpjc8o4ethxawr";

export const userCredentialsMock: UserCredentials = getUserCredentialsMock();
