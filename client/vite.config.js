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
    proxy: process.env.NODE_ENV === 'development' ? 'http://localhost:1000' : 'https://tech-agency.onrender.com',
  },

});
