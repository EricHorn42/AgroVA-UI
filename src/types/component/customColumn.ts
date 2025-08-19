import { Column } from "./customTableColum";

export const CustomColumn = <T,>(key: keyof T, label: string): Column<T> => ({
   key,
   label,
});