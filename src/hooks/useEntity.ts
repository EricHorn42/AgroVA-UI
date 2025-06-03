import { useContext } from "react";
import { EntityContextType } from "../types/context/entityContext";
import EntityContext from "../contexts/entityContext";

export const useEntity = (): EntityContextType => {
    const context = useContext(EntityContext);
    if (!context) {
      throw new Error('useEntity deve ser usado dentro de EntityProvider');
    }
    return context;
  };