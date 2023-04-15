import { Outlet, Route, useNavigate } from '@tanstack/react-router';
import { useConvexAuth } from 'convex/react';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { rootRoute } from './root';
import { LandingPage } from '../pages/landing-page';

function Auth() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { user } = useUser();

  const navigate = useNavigate({
    from: authenticatedRoute.id,
  });

  useEffect(() => {
    if (user) {
      navigate({ to: '/salesman' });
    }
  }, [user, navigate]);

  if (isLoading) return <>Loading...</>;

  if (!isAuthenticated) return <LandingPage />;

  return <Outlet />;
}

export const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Auth,
});
