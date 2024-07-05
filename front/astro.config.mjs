import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  build: {
    format: "file",
  },
  server: {
    port: 3000,
  },
  compressHTML: false,
  integrations: [relativeLinks()],
  vite: {
    build: {
      // minify: false,
      assetsInlineLimit: 1024,
      inlineStylesheets: "never",
      output: "static",
      emptyOutDir: false,
      rollupOptions: {
        output: {
          cssCodeSplit: false,
          entryFileNames: "assets/js/common.js",
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".")[1];
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = "fonts";
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = "images";
            }
            if (extType === "css") {
              return `assets/css/style.css`;
            }
            if (/\.ts$/.test(extType ?? "")) {
              return "assets/js/[name].[ext]";
            }
            return `assets/${extType}/[name][extname]`;
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },
});
