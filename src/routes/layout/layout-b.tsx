import { Route } from '@tanstack/react-router';
import { layoutRoute } from '.';

function LayoutB() {
  return (
    <div>
      <div>Layout B</div>
    </div>
  );
}

export const layoutRouteB = new Route({
  getParentRoute: () => layoutRoute,
  path: 'layout-b',
  component: LayoutB,
});
