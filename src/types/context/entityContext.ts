interface IEntityContext {
  entityId: number | null;
  setEntityId: (id: number | null) => void;
}

export type EntityContextType = Partial<IEntityContext>;