import { Types } from "mongoose";
import { UserCredentials, UserTokenStructure } from "../store/user/types";
import {
  getUserCredentialsMock,
  getUserMock,
  getUserTokenData,
} from "./factories/user/userfactory";

export const userMock: UserTokenStructure = getUserTokenData();

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwZGU1NzRkYTA5Mjk0Mzk1YTZlYWEiLCJuYW1lIjoiZ2luYSIsImlhdCI6MTY4NTU1NjkxNywiZXhwIjoxNjkyNDY4OTE3fQ.tytG1dDxJVic6GfylREE0wpI-aLgfVcY5b8KDUkAFOc";

export const userCredentialsMock: UserCredentials = getUserCredentialsMock();

export const loginUser = getUserMock({ isLogged: true, name: "Berta" });

export const registerUserMock = {
  email: "joana@gmail.com",
  name: "Joana",
  password: "$2y$10$qx1AooXPXZaYrmGDio0O/eHL8n1TAnD/0466o5WUqoA5Ho5sIsjcW",
  surname: "Garcia",
  username: "esealoha",
  id: new Types.ObjectId().toString(),
};
