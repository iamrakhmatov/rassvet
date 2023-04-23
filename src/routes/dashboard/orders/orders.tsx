import { Outlet, Route } from "@tanstack/react-router";
import { ordersRoute } from ".";

export const ordersIndexRoute = new Route({
  getParentRoute: () => ordersRoute,
  path: "/",
  component: function Orders() {
    return (
      <div>
        <div>Order Index Route</div>
        <hr />
        <Outlet />
      </div>
    );
  },
});
