import { defineConfig } from 'vite';
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = resolve(__dirname, "source");
const publicDir = resolve(__dirname, "public");
const mainPage = "source/pages/index.html"

export default defineConfig({
    root: resolve(__dirname, "."),
    publicDir: publicDir,


    //Aliases
    resolve: {
        alias: {
            "@": resolve(__dirname, "."),
            "@public": resolve(publicDir, "."),
            "@pages": resolve(sourceDir, "pages"),
            "@assets": resolve(sourceDir, "assets"),
            "@scripts": resolve(sourceDir, "scripts"),
            "@styles": resolve(sourceDir, "styles"),
        }
    },

    server: {
        open: mainPage,
        port: 3001,
    },

    build: {
        outDir: "build",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: mainPage,
            }
        },
    },


})