import { Route } from "@tanstack/react-router";
import { SalesmanHomePage } from "@/pages/salesman/salesman-home";
import { salesmanRoute } from "./layout";

export const salesmanIndexRoute = new Route({
  getParentRoute: () => salesmanRoute,
  path: "/",
  component: SalesmanHomePage,
});
