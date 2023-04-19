import { Router } from "@tanstack/react-router";
import { salesmanIndexRoute } from "@/routes/salesman";
import { adminIndexRoute } from "@/routes/admin/index";
import { cashierRoute } from "@/routes/cashier/layout";
import { rootRoute } from "@/routes/root";
import { salesmanRoute } from "@/routes/salesman/layout";

import { indexRoute } from "@/routes/index";
import { adminRoute } from "@/routes/admin/layout";
import { salesmanProductsRoute } from "@/routes/salesman/products";
import { cashierIndexRoute } from "@/routes/cashier";
import { logInRoute } from "./routes/login";
import { authLayout } from "./routes/auth-layout";

const routeTree = rootRoute.addChildren([
  // Public
  logInRoute,
  indexRoute,
  authLayout.addChildren([
    salesmanRoute.addChildren([salesmanIndexRoute, salesmanProductsRoute]),
    cashierRoute.addChildren([cashierIndexRoute]),
    adminRoute.addChildren([adminIndexRoute]),
  ]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
