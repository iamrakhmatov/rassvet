import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider } from "@clerk/clerk-react";
import { router } from "./router";
import "./styles/global.css";

export const convexClient = new ConvexReactClient(
  import.meta.env.VITE_CONVEX_URL
);

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <ConvexProviderWithClerk client={convexClient}>
          <RouterProvider router={router} />
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </StrictMode>
  );
}
