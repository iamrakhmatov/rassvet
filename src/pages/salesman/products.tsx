import { useMemo } from "react";
import { useQuery } from "@/convex/_generated/react";
import { EditableTable } from "@/components/table";
import { Table, createColumnHelper } from "@/components/ui/table";
import { Doc } from "@/convex/_generated/dataModel";

export function SalesmanProductsPage() {
  const products = useQuery("getProducts") ?? [];
  const columns = useProductsTableColumns();

  return (
    <div>
      <Table columns={columns} data={products} />
      {/* <EditableTable /> */}
    </div>
  );
}

type Product = Doc<"products">;
const useProductsTableColumns = () => {
  return useMemo(() => {
    const columnHelper = createColumnHelper<Product>();

    return [
      columnHelper.accessor("name", {
        header: "Name",
        footer: (props) => props.column.id,
      }),
      columnHelper.columns.text({
        id: "order",
        header: "Order",
        accessorFn: ({ order }) => order,
        edit: {
          onChange: (row, value) => console.log(row, value),
        },
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
};
