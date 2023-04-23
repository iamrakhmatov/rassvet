import { Outlet, Route } from "@tanstack/react-router";
import { dashboardRoute } from "@/routes/dashboard";

export const ordersRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "orders",
  component: function OrdersLayout() {
    return (
      <div>
        <div>Orders Layout Route</div>
        <hr />
        <Outlet />
      </div>
    );
  },
});
