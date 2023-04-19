import { Route } from "@tanstack/react-router";
import { AdminDashboard } from "@/pages/admin/dashboard";
import { useQuery } from "@/convex/react";
import { rootRoute } from "../../router";

export const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "admin",
  component: function AdminLayout() {
    // const status = useQuery("getUserStatus");

    // if (status !== "admin") return null;

    return <AdminDashboard />;
  },
});
