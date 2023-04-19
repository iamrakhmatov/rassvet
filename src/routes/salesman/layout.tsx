import { Route } from "@tanstack/react-router";
import { SalesmanDashboard } from "@/pages/salesman/salesman-dashboard";
// import { useQuery } from '@convex/react';
import { rootRoute } from "../../router";

export const salesmanRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "salesman",
  component: function SalesmanLayout() {
    console.log("Salesman layout");

    // const status = useQuery('getUserStatus');

    // if (status !== 'salesman') return null;

    return <SalesmanDashboard />;
  },
});
