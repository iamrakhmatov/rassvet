import { Outlet } from '@tanstack/react-router';
import { useQuery } from '@convex/react';

export const AdminLayout = () => {
  const status = useQuery('getUserStatus');

  if (status !== 'admin') return null;

  return (
    <div>
      <div>Admin Layout Route</div>
      <hr />
      <Outlet />
    </div>
  );
};
