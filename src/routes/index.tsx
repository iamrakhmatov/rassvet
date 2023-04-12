import { Route } from '@tanstack/react-router';
import { rootRoute } from './root';
import LoginButton from '../components/login';

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div>
        <LoginButton />
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});
