import { Route } from '@tanstack/react-router';
import { cashierLayout } from './layout';

function CashierIndex() {
  return (
    <div>
      <div>This is greeting from Cashier page</div>
    </div>
  );
}

export const cashierIndexRoute = new Route({
  getParentRoute: () => cashierLayout,
  path: 'cashier',
  component: CashierIndex,
});
