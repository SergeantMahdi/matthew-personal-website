import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "Source");
console.log(resolve(root, "Scripts"));

export default defineConfig({
  root: "./Source",

  build: {
    outDir: "../Build",
    rollupOptions: {
      input: {
        main: resolve(root, "/Pages/Home/home.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": root,
      "@Scripts": resolve(root, "Scripts"),
      "@Assets": resolve(root, "Assets"),
      "@APIs": resolve(root, "APIs"),
    }
  },
  server: {
    open: "/Pages/Home/home.html",
    port: 3001,
  },
});
