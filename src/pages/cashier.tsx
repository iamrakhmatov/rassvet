import { Outlet } from "@tanstack/react-router";

export function CashierDashboard() {
  return (
    <div>
      <h1>Cashier Dashboard</h1>
      <Outlet />
    </div>
  );
}
