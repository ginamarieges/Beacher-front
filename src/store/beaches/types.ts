export interface BeachStructure {
  name: string;
  image: string;
  description: string;
  region: string;
  town: string;
  services: {
    showers: boolean;
    baywatch: boolean;
    umbrellas: boolean;
    dogsAllowed: boolean;
    restaurant: boolean;
    familyBeach: boolean;
    secretBeach: boolean;
  };
  addServices?: string;
  users: string;
  id: string;
}

export interface BeachStateStructure {
  beaches: BeachStructure[];
}
