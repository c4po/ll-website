import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path matches the GitHub Pages project URL: https://<user>.github.io/<repo>/
export default defineConfig({
  base: '/ll-website/',
  plugins: [react()],
});
