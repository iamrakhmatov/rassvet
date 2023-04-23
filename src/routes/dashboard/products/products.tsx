import { Route } from "@tanstack/react-router";
import { productsRoute } from ".";

export const productsIndexRoute = new Route({
  getParentRoute: () => productsRoute,
  path: "/",
  component: function ProductsIndexPage() {
    return <>Products Index Page</>;
  },
});
