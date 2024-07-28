import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => ({
  plugins: [svgr(), mongezVite(), react()],
  envPrefix: "APP_",
}));
