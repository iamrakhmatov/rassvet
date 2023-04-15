import { Route } from '@tanstack/react-router';
import { salesmanLayout } from './layout';
import LogoutButton from '../../components/logout';

export function SalesmanIndex() {
  return (
    <div>
      <h3>Welcome to Salesman Home!</h3>
      <LogoutButton />
    </div>
  );
}

export const salesmanIndexRoute = new Route({
  getParentRoute: () => salesmanLayout,
  path: 'salesman',
  component: SalesmanIndex,
});
