import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import ViteAlias from 'vite-plugin-alias';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
