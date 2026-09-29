import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    base: "./",

    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), "index.html"),
                projetos: resolve(process.cwd(), "projetos.html"),
                formulario: resolve(process.cwd(), "formulario.html")
            }
        },

        outDir: "dist",
        emptyOutDir: true
    },

    server: {
        port: 5173,
        open: true
    }
});

