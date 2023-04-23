import { Outlet, Route } from "@tanstack/react-router";
import { dashboardRoute } from "..";

export const customersRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "customers",
  component: function Customers() {
    return (
      <div>
        <div>This is greeting from Customer page</div>
        <Outlet />
      </div>
    );
  },
});
