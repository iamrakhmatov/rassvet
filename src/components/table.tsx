/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowData,
  createColumnHelper,
  CellContext,
} from "@tanstack/react-table";
import clsx from "clsx";
import { useQuery } from "@/convex/_generated/react";
import { Doc } from "@/convex/_generated/dataModel";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

// // Give our default column cell renderer editing superpowers!
// const defaultColumn: Partial<ColumnDef<Products>> = {
//   cell: ({ getValue, row: { index }, column: { id }, table }) => {
//     const initialValue = getValue();
//     // We need to keep and update the state of the cell normally
//     const [value, setValue] = React.useState(initialValue);

//     // When the input is blurred, we'll call our table meta's updateData function
//     const onBlur = () => {
//       table.options.meta?.updateData(index, id, value);
//     };

//     // If the initialValue is changed external, sync it up with our state
//     React.useEffect(() => {
//       setValue(initialValue);
//     }, [initialValue]);

//     return (
//       <input
//         value={value as string}
//         onChange={(e) => setValue(e.target.value)}
//         onBlur={onBlur}
//       />
//     );
//   },
// };

type Product = Doc<"products">;

const InputField = ({
  row: { index },
  column: { id },
  table,
}: CellContext<Product, number>) => {
  const [value, setValue] = useState("");
  const onBlur = () => {
    if (value === "") return;
    table.options.meta?.updateData(index, id, value);
  };
  return (
    <input
      type="text"
      className="w-full border-0 pl-6 focus:ring-slate-300"
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export function EditableTable() {
  const products = useQuery("getProducts") ?? [];

  const columns = React.useMemo(() => {
    const columnHelper = createColumnHelper<Product>();

    return [
      columnHelper.accessor("name", {
        header: "Name",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("in_stock", {
        header: "Order",
        cell: (props) => InputField(props),
      }),
      columnHelper.accessor("in_stock", {
        header: "In Stock",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("booked", {
        header: "Booked",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("total", {
        header: "Total",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("price", {
        header: "Price",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor("unit", {
        header: "Unit",
        footer: (props) => props.column.id,
      }),
    ];
  }, []);

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        console.log("This is from there:", value, rowIndex);
        // Do here mutation stuff to update data on the database
      },
    },
    debugTable: true,
  });

  return (
    <div className="overflow-hidden ring-1 ring-gray-300  sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="divide-x divide-gray-200">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className={clsx(
                  row.index % 2 === 0 ? "" : "bg-gray-50",
                  "divide-x divide-gray-200 border-t border-gray-200 "
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={
                        cell.column.columnDef.header === "Order"
                          ? "w-24"
                          : "relative py-2 pl-4 pr-3 text-sm sm:pl-6"
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
