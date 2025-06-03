export interface ApiPromissory {
    id: string;
    timestamp: string;
    value: number;
    farmerId?: number;
    harvestId?: number;
  }
  
  export type Promissory = Partial<ApiPromissory>;
  export type CreatePromissoryDto = Omit<ApiPromissory, 'id'>;
  export type UpdatePromissoryDto = Partial<ApiPromissory>;
  