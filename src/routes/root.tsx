import { Link, RootRoute, Outlet } from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
        <Link to="/authenticated">Authenticated</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
