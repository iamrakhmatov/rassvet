import { Route } from '@tanstack/react-router';
import { layoutRoute } from '.';

function LayoutA() {
  return (
    <div>
      <div>Layout A</div>
    </div>
  );
}
export const layoutRouteA = new Route({
  getParentRoute: () => layoutRoute,
  path: 'layout-a',
  component: LayoutA,
});
