import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': "vue/dist/vue.esm-bundler.js"
    }
  }
})
