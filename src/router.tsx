import { Router } from '@tanstack/react-router';
import { salesmanLayout } from './routes/salesman/layout';
import { salesmanIndexRoute } from './routes/salesman';
import { cashierIndexRoute } from './routes/cashier';
import { rootRoute } from './routes/root';
import { cashierLayout } from './routes/cashier/layout';

import { authenticatedRoute } from './routes';

const routeTree = rootRoute.addChildren([
  authenticatedRoute.addChildren([
    salesmanLayout.addChildren([salesmanIndexRoute]),
    cashierLayout.addChildren([cashierIndexRoute]),
  ]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
