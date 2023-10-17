import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url'; 
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: "@app", replacement: fileURLToPath(new URL('./src/app', import.meta.url)) },
      { find: "@widgets", replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)) },
      { find: "@ui", replacement: fileURLToPath(new URL('./src/ui', import.meta.url)) },
      { find: "@public", replacement: fileURLToPath(new URL('./public', import.meta.url)) },
      { find: "@styles", replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
})
