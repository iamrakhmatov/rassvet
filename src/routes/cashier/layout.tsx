import { Outlet } from '@tanstack/react-router';

import { useQuery } from '../../../convex/_generated/react';

export const CashierLayout = () => {
  const status = useQuery('getUserStatus');

  if (status !== 'cashier') return null;
  return (
    <div>
      <div>Cashier Layout Route</div>
      <hr />
      <Outlet />
    </div>
  );
};
