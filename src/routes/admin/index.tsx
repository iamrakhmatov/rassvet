import { Route } from "@tanstack/react-router";
import { adminRoute } from "./layout";

export const adminIndexRoute = new Route({
  getParentRoute: () => adminRoute,
  path: "/",
  component: function AdminPage() {
    return (
      <div>
        <div>This is greeting from Admin page</div>
      </div>
    );
  },
});
