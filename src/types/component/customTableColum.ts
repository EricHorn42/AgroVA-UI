type TColumn<T> = {
  key: keyof T;
  label: string;
};

export type Column<T> = TColumn<T>;