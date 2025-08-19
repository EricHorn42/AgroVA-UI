import { createEntityContext } from "./entityContext";
import { Harvest } from "../types/api/Harvest";

export const { Provider: HarvestProvider, useEntityContext: useHarvest } = createEntityContext<Harvest>();
