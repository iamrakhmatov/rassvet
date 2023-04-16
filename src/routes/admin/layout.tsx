import { useQuery } from '@convex/react';
import { AdminDashboard } from '@pages/admin/dashboard';

export const AdminLayout = () => {
  const status = useQuery('getUserStatus');

  if (status !== 'admin') return null;

  return <AdminDashboard />;
};
