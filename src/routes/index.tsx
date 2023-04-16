import { Outlet, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useQuery } from '@convex/react';
import { authenticatedRoute } from '../router';

export function AuthenticatedWrapper() {
  const status = useQuery('getUserStatus');
  const navigate = useNavigate({
    from: authenticatedRoute.id,
  });

  useEffect(() => {
    if (status) {
      navigate({ to: `/${status}` });
    }
  }, [status, navigate]);

  if (!status) return <>Loading user status...</>;

  return <Outlet />;
}
