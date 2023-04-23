import { Route } from "@tanstack/react-router";
import { SalesmanProductsPage } from "@/pages/salesman/products";
import { dashboardRoute } from "..";
import { AdminProductsPage } from "@/pages/admin/products";
import { useUserRole } from "@/store";

export const productsRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "products",
  component: function Products() {
    const userRole = useUserRole();

    switch (userRole) {
      case "salesman":
        return <SalesmanProductsPage />;
      case "cashier":
        return <>Here will be Cashier Dashboard</>;
      case "admin":
        return <AdminProductsPage />;
      default:
        return <>You do not have access here</>;
    }
  },
});
