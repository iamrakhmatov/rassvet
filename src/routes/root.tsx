import { Outlet, RootRoute } from '@tanstack/react-router';

function RootPage() {
  return <Outlet />;
}

export const rootRoute = new RootRoute({
  component: RootPage,
});
