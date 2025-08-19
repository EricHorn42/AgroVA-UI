import { Column } from "./customTableColum";

type TCustomTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  route?: string;
  filterKey: keyof T;
  getRowKey?: (row: T) => string | number;
  onUpdate?: (row: T) => void | Promise<void>;
  onDelete?: (row: T) => void;
};

export type CustomTableProps<T> = TCustomTableProps<T>;