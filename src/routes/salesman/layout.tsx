import { Outlet } from '@tanstack/react-router';
import { useQuery } from '@convex/_generated/react';

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
