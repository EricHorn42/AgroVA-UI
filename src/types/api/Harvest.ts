import { EntityBase } from "./Entity";

export interface ApiHarvest extends EntityBase {
    year: number;
  }
  
  export type Harvest = EntityBase & Partial<Omit<ApiHarvest, keyof EntityBase>>;
  export type CreateHarvestDto = Omit<ApiHarvest, 'id'>;
  export type UpdateHarvestDto = Partial<ApiHarvest>;
  