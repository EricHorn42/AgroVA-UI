export interface EntityBase {
  id: number;
  value: string;
}

export type Entity = Partial<EntityBase>;