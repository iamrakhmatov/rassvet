import { Outlet } from '@tanstack/react-router';
import { useQuery } from '@convex/react';

export const SalesmanLayout = () => {
  const status = useQuery('getUserStatus');

  if (status !== 'salesman') return null;

  return (
    <div>
      <div>Salesman Layout Route</div>
      <hr /> <Outlet />
    </div>
  );
};
