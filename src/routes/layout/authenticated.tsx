import { useConvexAuth } from "convex/react";
import { Outlet, Route, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useQuery } from "@/convex/_generated/react";
import { useUserActions } from "@/store";
import { rootRoute } from "../root";
import { indexRoute } from "..";

export const authenticatedLayout = new Route({
  getParentRoute: () => rootRoute,
  id: "authenticated",
  component: function AuthLayout() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const user = useQuery("getUser");
    const { setUserRole } = useUserActions();
    const navigate = useNavigate({
      from: indexRoute.id,
    });

    useEffect(() => {
      if (!isAuthenticated && !isLoading) navigate({ to: "/login" });
    }, [isAuthenticated, isLoading, navigate]);

    useEffect(() => {
      // Save user role in Store
      if (user?.role) setUserRole(user.role);
    }, [user?.role, setUserRole]);

    if (isAuthenticated) return <Outlet />;

    return <Spinner />;
  },
});
