import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: 'dist',  // This ensures Vite outputs to the 'dist' folder
  }
,
  server: {
    proxy: {
      'api':{
        target: "http://localhost:1337",
        changeOrigin: true
      }
    }
  },

});
