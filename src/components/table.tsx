/* eslint-disable react/prop-types */
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowData,
  createColumnHelper,
} from '@tanstack/react-table';
import { makeData, Products } from './makeData';

declare module '@tanstack/react-table' {
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

export function EditableTable() {
  const [data, setData] = React.useState(() => makeData(10));

  const columns = React.useMemo(() => {
    const columnHelper = createColumnHelper<Products>();

    return [
      columnHelper.accessor('name', {
        header: 'Name',
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('in_stock', {
        header: 'In Stock',
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('booked', {
        header: 'Booked',
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('total', {
        header: 'Price',
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('unit', {
        header: 'Unit',
        footer: (props) => props.column.id,
      }),
    ];
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
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
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
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
