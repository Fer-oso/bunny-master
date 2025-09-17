import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // 👈 ajusta si lo subes a un subdirectorio
  build: {
    outDir: 'dist',
    sourcemap: false, // evita exponer el código en prod
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'] // separa librerías pesadas
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    allowedHosts: ["emotions-paint-peru-normally.trycloudflare.com"],
  },
});
