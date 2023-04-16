import { SalesmanHomePage } from '@pages/salesman/salesman-home';
import { Route } from '@tanstack/react-router';
import { salesmanRoute } from './layout';

export const salesmanIndexRoute = new Route({
  getParentRoute: () => salesmanRoute,
  path: '/',
  component: SalesmanHomePage,
});
