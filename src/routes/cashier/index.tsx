import { Route } from "@tanstack/react-router";
import { cashierRoute } from "./layout";

export const cashierIndexRoute = new Route({
  getParentRoute: () => cashierRoute,
  path: "/",
  component: function CashierIndex() {
    return (
      <div>
        <div>This is greeting from Cashier page</div>
      </div>
    );
  },
});
