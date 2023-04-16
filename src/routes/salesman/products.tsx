import { Route } from '@tanstack/react-router';
import { SalesmanProductsPage } from '@pages/salesman/salesman-products';
import { salesmanRoute } from './layout';

export const salesmanProductsRoute = new Route({
  getParentRoute: () => salesmanRoute,
  path: 'products',
  component: SalesmanProductsPage,
});
