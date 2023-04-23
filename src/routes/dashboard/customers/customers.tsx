import { Route } from "@tanstack/react-router";
import { customersRoute } from ".";

export const customersIndexRoute = new Route({
  getParentRoute: () => customersRoute,
  path: "/",
  component: function AdminLayout() {
    return <>Customers Index Page</>;
  },
});
