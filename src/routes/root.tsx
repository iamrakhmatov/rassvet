import { Outlet } from '@tanstack/react-router';
import { useConvexAuth } from 'convex/react';
import { LandingPage } from '../pages/landing-page';

export function RootPage() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) return <>Checking auth...</>;

  if (!isAuthenticated) return <LandingPage />;

  return <Outlet />;
}
