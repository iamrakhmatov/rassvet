import { Router } from '@tanstack/react-router';
import { indexRoute } from './routes';
import { aboutRoute } from './routes/about';
import { rootRoute } from './routes/root';
import {
  authenticatedIndexRoute,
  authenticatedRoute,
} from './routes/authenticated';

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  authenticatedRoute.addChildren([authenticatedIndexRoute]),
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
