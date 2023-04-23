import { Route } from "@tanstack/react-router";
import { authenticatedLayout } from "../layout/authenticated";
import { useUserRole } from "@/store";
import { SalesmanDashboard } from "@/pages/salesman/dashboard";
import { AdminDashboard } from "@/pages/admin";

export const dashboardRoute = new Route({
  getParentRoute: () => authenticatedLayout,
  path: "dashboard",
  component: function Dashboard() {
    const userRole = useUserRole();

    switch (userRole) {
      case "salesman":
        return <SalesmanDashboard />;
      case "cashier":
        return <>Here will be Cashier Dashboard</>;
      case "admin":
        return <AdminDashboard />;
      default:
        return <>You do not have access here</>;
    }
  },
});
