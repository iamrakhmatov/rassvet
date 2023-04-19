import { useConvexAuth } from "convex/react";
import { Outlet, Route, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { rootRoute } from "./root";
import { indexRoute } from ".";

export const authLayout = new Route({
  getParentRoute: () => rootRoute,
  id: "authenticated",
  component: function Auth() {
    console.log("Auth layout");
    const { isAuthenticated, isLoading } = useConvexAuth();
    const navigate = useNavigate({
      from: indexRoute.id,
    });

    useEffect(() => {
      if (!isAuthenticated && !isLoading) navigate({ to: "/login" });
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) return <Spinner />;

    return <Outlet />;
  },
});
