import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 Esto es clave para que funcione en Hostinger
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
