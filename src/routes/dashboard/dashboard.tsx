import { Route } from "@tanstack/react-router";
import { useUserRole } from "@/store";
import { SalesmanHomePage } from "@/pages/salesman/home";
import { dashboardRoute } from ".";

export const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function Dashboard() {
    const userRole = useUserRole();

    return <SalesmanHomePage />;
  },
});
