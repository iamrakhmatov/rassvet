import { Outlet, RootRoute } from "@tanstack/react-router";

export const rootRoute = new RootRoute({
  component: function RootPage(): JSX.Element {
    return <Outlet />;
  },
});
