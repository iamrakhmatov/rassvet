import { Router } from "@tanstack/react-router";
import { rootRoute } from "@/routes/root";

import { indexRoute } from "@/routes/index";
import { logInRoute } from "@/routes/login";
import { authenticatedLayout } from "@/routes/layout/authenticated";
import { dashboardRoute } from "@/routes/dashboard";
import { dashboardIndexRoute } from "@/routes/dashboard/dashboard";
import { productsRoute } from "@/routes/dashboard/products";
import { productsIndexRoute } from "@/routes/dashboard/products/products";
import { productRoute } from "@/routes/dashboard/products/product";
import { ordersRoute } from "@/routes/dashboard/orders";
import { ordersIndexRoute } from "@/routes/dashboard/orders/orders";
import { customersRoute } from "@/routes/dashboard/customers";
import { customersIndexRoute } from "@/routes/dashboard/customers/customers";

const routeTree = rootRoute.addChildren([
  // Public
  logInRoute,
  indexRoute,
  // Protected
  authenticatedLayout.addChildren([
    dashboardRoute.addChildren([
      dashboardIndexRoute,
      productsRoute.addChildren([productsIndexRoute, productRoute]),
      ordersRoute.addChildren([ordersIndexRoute]),
      customersRoute.addChildren([customersIndexRoute]),
    ]),
  ]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
