import { Route } from '@tanstack/react-router';
import { SalesmanDashboard } from '@pages/salesman/salesman-dashboard';
import { useQuery } from '@convex/react';
import { authenticatedRoute } from '../../router';

export const salesmanRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: 'salesman',
  component: function SalesmanLayout() {
    const status = useQuery('getUserStatus');

    if (status !== 'salesman') return null;

    return <SalesmanDashboard />;
  },
});
