import { UserCredentials, UserTokenStructure } from "../store/user/types";
import {
  getUserCredentialsMock,
  getUserTokenData,
} from "./factories/user/userfactory";

export const userMock: UserTokenStructure = getUserTokenData();

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwZGU1NzRkYTA5Mjk0Mzk1YTZlYWEiLCJuYW1lIjoiZ2luYSIsImlhdCI6MTY4NTU1NjkxNywiZXhwIjoxNjkyNDY4OTE3fQ.tytG1dDxJVic6GfylREE0wpI-aLgfVcY5b8KDUkAFOc";

export const userCredentialsMock: UserCredentials = getUserCredentialsMock();
