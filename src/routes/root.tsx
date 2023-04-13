import { RootRoute, Outlet } from '@tanstack/react-router';
import LandingPage from '../pages/landing-page';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <LandingPage />
      <Outlet />
    </>
  ),
});
