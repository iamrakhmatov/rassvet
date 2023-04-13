import { RootRoute, Outlet } from '@tanstack/react-router';
import { useConvexAuth } from 'convex/react';
import LandingPage from '../pages/landing-page';

const RootPage = () => {
  const { isAuthenticated } = useConvexAuth();
  return isAuthenticated ? <Outlet /> : <LandingPage />;
};

export const rootRoute = new RootRoute({
  component: RootPage,
});
