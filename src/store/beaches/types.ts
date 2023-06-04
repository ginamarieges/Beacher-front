export interface BeachDataStructure {
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
}

export interface BeachStructure extends BeachDataStructure {
  id: string;
}

export interface BeachStateStructure {
  beaches: BeachStructure[];
}

export interface BeachStateDataStructure {
  beaches: BeachDataStructure[];
}
