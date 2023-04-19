import { Outlet } from "@tanstack/react-router";
/**
 * Renders the root page.
 *
 * @returns {JSX.Element} The rendered root page.
 */
export function RootPage(): JSX.Element {
  console.log("Root page");

  // Renders the Outlet component, which is used for nested routing.
  return <Outlet />;
}
