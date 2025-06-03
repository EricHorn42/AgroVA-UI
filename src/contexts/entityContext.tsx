import React, { createContext, useState } from 'react';
import { EntityContextType } from '../types/context/entityContext';


const EntityContext = createContext<EntityContextType | undefined>(undefined);

export default EntityContext;

export const EntityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entityId, setEntityId] = useState<number | null>(null);

  return (
    <EntityContext.Provider value={{ entityId, setEntityId }}>
      {children}
    </EntityContext.Provider>
  );
};

