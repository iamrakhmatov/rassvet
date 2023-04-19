import { RootRoute, Router } from "@tanstack/react-router";
import { salesmanIndexRoute } from "@/routes/salesman";
import { adminIndexRoute } from "@/routes/admin/index";
import { cashierRoute } from "@/routes/cashier/layout";
import { RootPage } from "@/routes/root";
import { salesmanRoute } from "@/routes/salesman/layout";

import { indexRoute } from "@/routes/index";
import { adminRoute } from "@/routes/admin/layout";
import { salesmanProductsRoute } from "@/routes/salesman/products";
import { cashierIndexRoute } from "@/routes/cashier";
import { logInRoute } from "./routes/login";

export const rootRoute = new RootRoute({
  component: RootPage,
});

// export const authenticatedRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: AuthenticatedWrapper,
// });

const routeTree = rootRoute.addChildren([
  // Should be private
  salesmanRoute.addChildren([salesmanIndexRoute, salesmanProductsRoute]),
  cashierRoute.addChildren([cashierIndexRoute]),
  adminRoute.addChildren([adminIndexRoute]),

  // Public
  indexRoute,
  logInRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
