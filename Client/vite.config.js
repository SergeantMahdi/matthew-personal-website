import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "Source");

export default defineConfig({
  root: "./Source",

  build: {
    outDir: "../Build",
    rollupOptions: {
      input: {
        main: resolve(root, "/View/Home/home.html"),
      },
    },
  },
  server: {
    open: "/View/Home/home.html",
    port: 3001,
  },
});
