import { Outlet, Route } from '@tanstack/react-router';

import { rootRoute } from '../root';

export const layoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: function LayoutWrapper() {
    return (
      <div>
        <div>Layout</div>
        <div>Random #: randomId</div>
        <hr />
        <Outlet />
      </div>
    );
  },
});
