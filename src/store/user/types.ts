export interface UserTokenDataStructure {
  id: string;
  name: string;
}

export interface UserTokenStructure extends UserTokenDataStructure {
  token: string | undefined;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserDataStructure extends UserCredentials {
  name: string;
  surname: string;
  email: string;
}
