export interface UserTokenStructure {
  id: string;
  name: string;
  token: string;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}
