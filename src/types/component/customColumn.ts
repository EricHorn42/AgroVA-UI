import { Column } from "./customTableColum";

export const createColumn = <T,>(key: keyof T, label: string): Column<T> => ({
   key,
   label,
});