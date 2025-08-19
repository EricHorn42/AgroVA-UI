// import React, { createContext, useState } from 'react';
// import { EntityContextType } from '../types/context/entityContext';


// const EntityContext = createContext<EntityContextType | undefined>(undefined);

// export default EntityContext;

// export const EntityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [id, setId] = useState<number>(null);

//   return (
//     <EntityContext.Provider value={{ id, setId }}>
//       {children}
//     </EntityContext.Provider>
//   );
// };

// contexts/GenericEntityContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { EntityBase } from "../types/api/Entity";

export interface EntityContextType<T extends EntityBase> {
  id: number | undefined;
  setId: (id: number | undefined) => void;
  selectedId?: T | undefined;
  setSelectedId?: (e: T | undefined) => void;
}

// Criador de contexto genérico
export function createEntityContext<T extends EntityBase>() {
  const Context = createContext<EntityContextType<T> | undefined>(undefined);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [id, setId] = useState<number | undefined>();
    const [selectedId, setSelectedId] = useState<T | undefined>();

    return (
      <Context.Provider
        value={{
          id,
          setId,
          selectedId,
          setSelectedId,
        }}
      >
        {children}
      </Context.Provider>
    );
  };

  const useEntityContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useEntityContext must be used within a Provider");
    }
    return context;
  };

  return { Provider, useEntityContext };
}