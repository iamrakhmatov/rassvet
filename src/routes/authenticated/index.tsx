import { Outlet, Route } from '@tanstack/react-router';
import { useConvexAuth } from 'convex/react';
import { useAuth0 } from '@auth0/auth0-react';
import { rootRoute } from '../root';
import LoginButton from '../../components/login';
import LogoutButton from '../../components/logout';

export const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'authenticated',
  component: function Auth() {
    const { isAuthenticated } = useConvexAuth();

    return isAuthenticated ? (
      <Outlet />
    ) : (
      <div className="p-2">
        <div>You must log in!</div>
        <div className="h-2" />
        <LoginButton />
        <LogoutButton />
      </div>
    );
  },
});

export const authenticatedIndexRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: '/',
  component: function Authenticated() {
    const { user } = useAuth0();

    return (
      <div className="p-2">
        You&apos;re authenticated! Your username is{' '}
        <strong>{user?.name}</strong>
        <div className="h-2" />
        <LogoutButton />
        <div className="h-2" />
        <div>
          This authentication example is obviously very contrived and simple. It
          doesn&apos;t cover the use case of a redirected login page, but does
          illustrate how easy it is to simply wrap routes with ternary logic to
          either show a login prompt or redirect (probably with the `Navigate`
          component).
        </div>
      </div>
    );
  },
});
