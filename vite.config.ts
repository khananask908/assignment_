import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { handler } from './src/server';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            handler(req, res);
          });
        },
      },
    },
  },
});