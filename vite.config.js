import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (www.llbsolution.com) serves the site at root.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
