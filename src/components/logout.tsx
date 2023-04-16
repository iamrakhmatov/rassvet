import { SignOutButton } from '@clerk/clerk-react';

export function LogoutButton() {
  return (
    <div className="font-sans text-sm text-gray-600 hover:text-gray-800">
      <SignOutButton />
    </div>
  );
}
