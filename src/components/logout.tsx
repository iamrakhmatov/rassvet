import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      onClick={() =>
        logout({
          logoutParams: { returnTo: import.meta.env.VITE_AUTH0_ORIGIN_URL },
        })
      }
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
