// contexts/FarmerContext.tsx
import { createEntityContext } from "./entityContext";
import { Farmer } from "../types/api/Farmer";

export const { Provider: FarmerProvider, useEntityContext: useFarmer } = createEntityContext<Farmer>();
