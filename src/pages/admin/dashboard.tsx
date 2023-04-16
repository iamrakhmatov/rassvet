import {
  CalendarIcon,
  FilesIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from 'lucide-react';
import clsx from 'clsx';
import { Link, Outlet } from '@tanstack/react-router';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Team', href: '/', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/', icon: FilesIcon, current: false },
];

export function AdminDashboard() {
  return (
    <div className="font-mono">
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        to="/salesman/products"
                        className={clsx(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
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
