import { Route } from "@tanstack/react-router";
import { SalesmanProductsPage } from "@/pages/salesman/products";
import { productsRoute } from ".";

export const productRoute = new Route({
  getParentRoute: () => productsRoute,
  path: "$productId",
  component: function Products() {
    return <SalesmanProductsPage />;
  },
});
