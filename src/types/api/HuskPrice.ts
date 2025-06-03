export interface ApiHuskPrice {
    id: string;
    timestamp: string;
    percent: number;
    price: number;
    harvestId?: number;
  }
  
  export type HuskPrice = Partial<ApiHuskPrice>;
  export type CreateHuskPriceDto = Omit<ApiHuskPrice, 'id'>;
  export type UpdateHuskPriceDto = Partial<ApiHuskPrice>;
  