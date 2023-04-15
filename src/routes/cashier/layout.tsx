import { Outlet, Route } from '@tanstack/react-router';
import { authenticatedRoute } from '..';

const CashierLayoutWrapper = () => {
  console.log('Cashier Layout Wrapper');

  return (
    <div>
      <div>Cashier Layout Route</div>
      <hr />
      <Outlet />
    </div>
  );
};

export const cashierLayout = new Route({
  getParentRoute: () => authenticatedRoute,
  id: 'cashier',
  component: CashierLayoutWrapper,
});
