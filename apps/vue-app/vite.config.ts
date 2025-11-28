import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

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
        eos: './src/modules/eos/main.ts',
        measurements: './src/modules/measurements/main.ts',
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    origin: 'http://localhost:5173',
    proxy: {
        '/Component': {
            target: 'https://localhost:44301',
            secure: false, // Set to false to accept self-signed SSL certificates from IIS Express
        }
    }
  }
})
