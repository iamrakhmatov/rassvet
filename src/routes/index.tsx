import { Route, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useConvexAuth } from "convex/react";
import { LandingPage } from "@/pages/landing-page";
import { rootRoute } from "./root";
import { Spinner } from "@/components/ui/spinner";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function IndexPage() {
    const { isAuthenticated, isLoading } = useConvexAuth();

    const navigate = useNavigate({
      from: indexRoute.id,
    });

    useEffect(() => {
      if (isAuthenticated) navigate({ to: "/dashboard" });
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated && !isLoading) return <LandingPage />;

    return <Spinner />;
  },
});
