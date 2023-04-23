import clsx from "clsx";
import { Link, Outlet } from "@tanstack/react-router";
import {
  CalendarIcon,
  FilesIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  LucideIcon,
} from "lucide-react";

type AdminRoutes = "/";

type SalesmanNavigation = {
  name: string;
  href: AdminRoutes;
  current: boolean;
  icon: LucideIcon;
};

const navigation: SalesmanNavigation[] = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Team", href: "/", icon: UsersIcon, current: false },
  { name: "Projects", href: "/", icon: FolderIcon, current: false },
  { name: "Calendar", href: "/", icon: CalendarIcon, current: false },
  { name: "Documents", href: "/", icon: FilesIcon, current: false },
];

export function AdminDashboard() {
  return (
    <div className="font-mono">
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
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
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        to={item.href}
                        className={clsx(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6"
                        )}
                      >
                        <item.icon
                          className="h-5 w-5 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="-mx-6 mt-auto">
                <a
                  href="/"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm leading-6 text-white hover:bg-gray-800"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
