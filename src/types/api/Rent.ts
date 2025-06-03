export interface ApiRent {
    id: string;
    person: string;
    percent: number;
    value: number;
    annotation?: string;
    farmerId?: number;
    harvestId?: number;
  }
  
  export type Rent = Partial<ApiRent>;
  export type CreateRentDto = Omit<ApiRent, 'id'>;
  export type UpdateRentDto = Partial<ApiRent>;
  