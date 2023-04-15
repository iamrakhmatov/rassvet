import { SignIn } from '@clerk/clerk-react';
// import LoginButton from '../components/login';

export function LandingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute h-[300px] w-[400px]">
        <div className="absolute right-full top-0 z-10 h-full w-8 bg-white" />
      </div>
      <SignIn
        appearance={{
          elements: {
            card: 'shadow-none border border-gray-300',
            headerSubtitle: 'hidden',
            footer: 'hidden',
          },
        }}
      />
    </div>
    // <div className="relative h-screen bg-white">
    //   <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    //     <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
    //       <div className="mx-auto max-w-2xl lg:mx-0">
    //         <img
    //           className="h-11"
    //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //           alt="Your Company"
    //         />
    //         <div className="hidden sm:mt-32 sm:flex lg:mt-16">
    //           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    //             Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
    //             <a
    //               href="/"
    //               className="whitespace-nowrap font-semibold text-indigo-600"
    //             >
    //               <span className="absolute inset-0" aria-hidden="true" />
    //               Read more <span aria-hidden="true">&rarr;</span>
    //             </a>
    //           </div>
    //         </div>
    //         <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
    //           Data to enrich your online business
    //         </h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-600">
    //           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //           lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //           fugiat aliqua.
    //         </p>
    //         <LoginButton />
    //       </div>
    //     </div>
    //     <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
    //       <img
    //         className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
    //         src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
