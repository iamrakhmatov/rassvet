import { RootRoute, Route, Router } from '@tanstack/react-router';
import { CashierIndex } from '@routes/cashier';
import { salesmanIndexRoute } from '@routes/salesman';
import { AdminPage } from '@routes/admin/index';
import { CashierLayout } from '@routes/cashier/layout';
import { RootPage } from '@routes/root';
import { salesmanRoute } from '@routes/salesman/layout';

import { AuthenticatedWrapper } from '@routes/index';
import { AdminLayout } from '@routes/admin/layout';
import { salesmanProductsRoute } from '@routes/salesman/products';

export const rootRoute = new RootRoute({
  component: RootPage,
});

export const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AuthenticatedWrapper,
});

export const cashierLayout = new Route({
  getParentRoute: () => authenticatedRoute,
  id: 'cashier',
  component: CashierLayout,
});

export const cashierIndexRoute = new Route({
  getParentRoute: () => cashierLayout,
  path: 'cashier',
  component: CashierIndex,
});

export const adminLayout = new Route({
  getParentRoute: () => authenticatedRoute,
  id: 'admin',
  component: AdminLayout,
});

export const adminRoute = new Route({
  getParentRoute: () => adminLayout,
  path: 'admin',
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  authenticatedRoute.addChildren([
    salesmanRoute.addChildren([salesmanIndexRoute, salesmanProductsRoute]),
    cashierLayout.addChildren([cashierIndexRoute]),
    adminLayout.addChildren([adminRoute]),
  ]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
