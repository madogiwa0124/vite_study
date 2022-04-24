import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

const getEntries = require("./config/vite/util/getEntries");
const JAVASCRIPT_ENTRY_PATH = "./src/javascripts/entries/";
const HTML_ENTRY_PATH = "./src/";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: { ...getEntries(JAVASCRIPT_ENTRY_PATH), ...getEntries(HTML_ENTRY_PATH) },
    },
    outDir: "public",
    assetsDir: "packs",
  },
  plugins: [vue(), legacy({ targets: ["defaults", "not IE 11"] })],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@js": `${__dirname}/src/javascripts`,
      "@css": `${__dirname}/src/styles`,
    },
  },
});
