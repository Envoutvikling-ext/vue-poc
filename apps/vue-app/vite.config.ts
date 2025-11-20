import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  base: '', // keep empty; CDN base will prefix URLs at runtime
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    manifest: 'manifest.json',
    rollupOptions: {
      input: {
        main: './src/main.ts',
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true
  }
})
