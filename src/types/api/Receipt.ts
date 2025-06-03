export interface ApiReceipt {
    id: string;
    timestamp: string;
    value: number;
    farmerId?: number;
    harvestId?: number;
  }
  
  export type Receipt = Partial<ApiReceipt>;
  export type CreateReceiptDto = Omit<ApiReceipt, 'id'>;
  export type UpdateReceiptDto = Partial<ApiReceipt>;
  