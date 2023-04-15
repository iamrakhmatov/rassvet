import { Outlet, Route } from '@tanstack/react-router';
import { authenticatedRoute } from '..';

const SalesmanLayoutWrapper = () => {
  console.log('Salesman Layout Wrapper');

  return (
    <div>
      <div>Salesman Layout Route</div>
      <hr />
      <Outlet />
    </div>
  );
};

export const salesmanLayout = new Route({
  getParentRoute: () => authenticatedRoute,
  id: 'salesman',
  component: SalesmanLayoutWrapper,
});
