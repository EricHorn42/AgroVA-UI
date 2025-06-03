export interface ApiLoad {
    id: string;
    timestamp: string;
    greenWeight?: number;
    dryWeight?: number;
    register: number;
    price?: number;
    wholePercent?: number;
    invoice: number;
    farmerId?: number;
    harvestId?: number;
  }
  
  export type Load = Partial<ApiLoad>;
  export type CreateLoadDto = Omit<ApiLoad, 'id'>;
  export type UpdateLoadDto = Partial<ApiLoad>;
  