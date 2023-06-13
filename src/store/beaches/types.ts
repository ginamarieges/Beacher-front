export interface BeachStateStructure {
  beaches: BeachStructure[];
  region?: string;
  beach: BeachStructure;
  length: number;
}
export interface BeachStructure {
  name: string;
  image: string;
  description?: string;
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
  user: string;
  id: string;
}

export interface BeachAddStructure {
  name: string;
  image: string;
  description?: string;
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
}
