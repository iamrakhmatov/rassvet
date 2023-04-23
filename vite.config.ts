import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src/"),
      "@/convex": path.resolve(__dirname, "./convex/"),
      "@/lib": `${path.resolve(__dirname, "./src/lib/")}`,
      "@/store": `${path.resolve(__dirname, "./src/store/")}`,
      "@/hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
      "@/pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@/routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "@/components": `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
});
