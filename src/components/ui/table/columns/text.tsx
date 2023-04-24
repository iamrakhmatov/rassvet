import { ColumnDef, Row } from "@tanstack/react-table";

type TextColumnConfig<TData> = {
  header: string;
  edit?: {
    onChange: (row: Row<TData>, value: string) => void;
  };
};

export function text<TData>() {
  return ({
    edit,
    ...columnDef
  }: ColumnDef<TData, number | undefined> & TextColumnConfig<TData>): ColumnDef<
    TData,
    number | undefined
  > => {
    return {
      ...columnDef,

      cell: ({ row, getValue }) => {
        const value = getValue();

        return (
          <input
            className="w-full border-0 pl-6 focus:ring-slate-300"
            type="text"
            defaultValue={value}
          />
        );
      },

      meta: {
        ...columnDef.meta,
      },
    };
  };
}
