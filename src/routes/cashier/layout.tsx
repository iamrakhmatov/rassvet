import { Outlet, Route } from "@tanstack/react-router";
// import { useQuery } from "@/convex/react";
import { authLayout } from "../auth-layout";

export const cashierRoute = new Route({
  getParentRoute: () => authLayout,
  path: "cashier",
  component: function CashierLayout() {
    // const status = useQuery("getUserStatus");

    // if (status !== "cashier") return null;
    return (
      <div>
        <div>Cashier Layout Route</div>
        <hr />
        <Outlet />
      </div>
    );
  },
});
