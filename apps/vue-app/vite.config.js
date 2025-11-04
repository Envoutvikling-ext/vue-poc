import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '', // keep empty; URLs will be prefixed by CDN base at runtime
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        outDir: 'dist',
        manifest: true,
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
});
