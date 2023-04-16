import { LogoutButton } from '@components/logout';
import { Link, Outlet } from '@tanstack/react-router';
import clsx from 'clsx';
import { BellIcon } from 'lucide-react';

type SalesmanRoutes = '/salesman' | '/salesman/products';

type SalesmanNavigation = {
  name: string;
  href: SalesmanRoutes;
  current: boolean;
};

const navigation: SalesmanNavigation[] = [
  { name: 'Home', href: '/salesman', current: true },
  { name: 'Products', href: '/salesman/products', current: false },
  { name: 'Orders', href: '/salesman/products', current: false },
  { name: 'Clients', href: '/salesman/products', current: false },
];

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

export function SalesmanDashboard() {
  return (
    <div className="h-screen bg-gray-100 font-serif">
      <div className="min-h-full">
        <div className="w-full bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={clsx(
                      item.current
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
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
