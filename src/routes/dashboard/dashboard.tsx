import { Route } from "@tanstack/react-router";
import { useUserRole } from "@/store";
import { SalesmanHomePage } from "@/pages/salesman/home";
import { dashboardRoute } from ".";
import { AdminHomePage } from "@/pages/admin/home";

export const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: function Dashboard() {
    const userRole = useUserRole();

    switch (userRole) {
      case "salesman":
        return <SalesmanHomePage />;
      case "cashier":
        return <>Here will be Cashier Dashboard</>;
      case "admin":
        return <AdminHomePage />;
      default:
        return <>You do not have access here</>;
    }
  },
});
