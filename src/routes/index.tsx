import { Route, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useConvexAuth } from "convex/react";
import { LandingPage } from "@/pages/landing-page";
import { useQuery } from "@/convex/react";
import { rootRoute } from "../router";
import { Spinner } from "@/components/ui/spinner";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function IndexPage() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const status = useQuery("getUserStatus");

    const navigate = useNavigate({
      from: indexRoute.id,
    });

    useEffect(() => {
      if (isAuthenticated && status) {
        navigate({ to: `/${status}` });
      }
    }, [isAuthenticated, status, navigate]);

    if (!isAuthenticated && !isLoading) return <LandingPage />;

    return <Spinner />;
  },
});

// function AuthenticatedWrapper() {
//   const status = useQuery('getUserStatus');
//   const navigate = useNavigate({
//     from: authenticatedRoute.id,
//   });

//   useEffect(() => {
//     if (status) {
//       navigate({ to: `/${status}` });
//     }
//   }, [status, navigate]);

//   if (!status) return <>Loading user status...</>;

//   return <Outlet />;
// }
