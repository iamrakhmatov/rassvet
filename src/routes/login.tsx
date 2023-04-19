import { Route } from "@tanstack/react-router";
import { SignIn } from "@clerk/clerk-react";
import { rootRoute } from "../router";

export const logInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "login",
  component: function Auth() {
    console.log("Auth page");

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="absolute h-[300px] w-[400px]">
          <div className="absolute right-full top-0 z-10 h-full w-8 bg-white" />
        </div>
        <SignIn
          appearance={{
            elements: {
              card: "shadow-none border border-gray-300",
              headerSubtitle: "hidden",
              footer: "hidden",
            },
          }}
        />
      </div>
    );
  },
});
