/* eslint-disable react/prop-types */
import React, { memo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Row,
} from "@tanstack/react-table";
import clsx from "clsx";

// declare module "@tanstack/react-table" {
//   interface ColumnMeta<TData, TValue> {
//     filter?: FilterColumnMeta<TData, TValue>;
//   }
// }

type TableProps<TData> = {
  data: TData[];
  // not possible to use `unknown` with typed accessors
  // https://github.com/TanStack/table/issues/4241
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  onRowClick?: (row: Row<TData>) => void;
};

function EditableTable<TData>({
  data,
  columns,
  onRowClick,
}: TableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
                  onRowClick && "cursor-pointer",
                  row.index % 2 === 0 ? "" : "bg-gray-50",
                  "divide-x divide-gray-200 border-t border-gray-200 "
                )}
                onClick={onRowClick && (() => onRowClick(row))}
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

export const Table = memo(EditableTable) as typeof EditableTable;
