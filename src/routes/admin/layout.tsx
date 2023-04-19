import { Route } from "@tanstack/react-router";
import { AdminDashboard } from "@/pages/admin/dashboard";
// import { useQuery } from "@/convex/react";
import { authLayout } from "../auth-layout";

export const adminRoute = new Route({
  getParentRoute: () => authLayout,
  path: "admin",
  component: function AdminLayout() {
    // const status = useQuery("getUserStatus");

    // if (status !== "admin") return null;

    return <AdminDashboard />;
  },
});
