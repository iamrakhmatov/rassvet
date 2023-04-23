import { Route } from "@tanstack/react-router";
import { SalesmanProductsPage } from "@/pages/salesman/products";
import { dashboardRoute } from "..";

export const productsRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "products",
  component: function Products() {
    return <SalesmanProductsPage />;
  },
});
