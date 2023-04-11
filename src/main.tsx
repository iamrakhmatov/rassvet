import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import { Auth0Provider } from '@auth0/auth0-react';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithAuth0 } from 'convex/react-auth0';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div>
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div>Hello from About!</div>;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_AUTH0_ORIGIN_URL,
        }}
      >
        <ConvexProviderWithAuth0 client={convex}>
          <RouterProvider router={router} />
        </ConvexProviderWithAuth0>
      </Auth0Provider>
      ,
    </StrictMode>
  );
}
