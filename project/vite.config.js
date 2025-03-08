import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite config, ensuring PostCSS is used with the `@tailwindcss/postcss` plugin
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Make sure this points to your PostCSS config
  },
});
