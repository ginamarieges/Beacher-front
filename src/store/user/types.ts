export interface UserDataStructure {
  id: string;
  name: string;
}

export interface UserTokenStructure extends UserDataStructure {
  token: string | undefined;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}
