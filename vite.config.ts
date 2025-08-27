import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  
  // Only add lovable-tagger in development mode if available
  if (mode === 'development') {
    try {
      const { componentTagger } = require('lovable-tagger');
      plugins.push(componentTagger());
    } catch (e) {
      // lovable-tagger not available, continue without it
    }
  }
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    preview: {
      host: true,
      port: 4173,
      allowedHosts: ['bio.scaleitpro.com'],
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
