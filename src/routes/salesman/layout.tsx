import { Route, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@/convex/react";
import { Spinner } from "@/components/ui/spinner";
import { SalesmanDashboard } from "@/pages/salesman/salesman-dashboard";
import { authLayout } from "../auth-layout";
import { indexRoute } from "..";

export const salesmanRoute = new Route({
  getParentRoute: () => authLayout,
  path: "salesman",
  component: function SalesmanLayout() {
    console.log("Salesman layout");
    const status = useQuery("getUserStatus");
    const navigate = useNavigate({
      from: indexRoute.id,
    });

    useEffect(() => {
      if (status && status !== "salesman") navigate({ to: "/" });
    }, [status, navigate]);

    if (!status) return <Spinner />;

    return <SalesmanDashboard />;
  },
});
