import { Link, Outlet } from "@tanstack/react-router";
import clsx from "clsx";
import { BellIcon } from "lucide-react";
import { LogoutButton } from "@/components/logout";

type SalesmanRoutes = "/salesman" | "/salesman/products";

type SalesmanNavigation = {
  name: string;
  href: SalesmanRoutes;
  current: boolean;
};

const navigation: SalesmanNavigation[] = [
  { name: "Home", href: "/salesman", current: true },
  { name: "Products", href: "/salesman/products", current: false },
  { name: "Orders", href: "/salesman/products", current: false },
  { name: "Clients", href: "/salesman/products", current: false },
];

export function SalesmanDashboard() {
  return (
    <div className="h-screen bg-gray-100 font-serif">
      <div className="min-h-full">
        <div className="w-full bg-white px-4 shadow-sm sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <svg
                    className=" h-8 w-auto lg:block"
                    viewBox="0 0 47 40"
                    fill="none"
                  >
                    <path
                      fill="#4f46e5"
                      d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
                    />
                    <defs>
                      <linearGradient
                        id="%%GRADIENT_ID%%"
                        x1="33.999"
                        x2="1"
                        y1="16.181"
                        y2="16.181"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="%%GRADIENT_TO%%" />
                        <stop offset="1" stopColor="%%GRADIENT_FROM%%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={clsx(
                      item.current
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden gap-x-4 sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <LogoutButton />
            </div>
          </div>
        </div>

        <header className="py-10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Salesman Dashboard
            </h1>
          </div>
        </header>

        <main>
          <div className="w-full sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
