import { EntityBase } from "./Entity";

export interface ApiFarmer extends EntityBase {
  name: string;
  phone: string;  
}

export type Farmer = Partial<ApiFarmer>;

export type CreateFarmerDto = Omit<Farmer, 'id'>;
export type UpdateFarmerDto = Partial<Farmer>;
