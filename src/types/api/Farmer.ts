import { EntityBase } from "./Entity";

export interface ApiFarmer extends EntityBase {
  name: string;
  phone: string;  
}

export type Farmer = EntityBase & Partial<Omit<ApiFarmer, keyof EntityBase>>;

export type CreateFarmerDto = Omit<Farmer, 'id'>;
export type UpdateFarmerDto = Partial<Farmer>;
