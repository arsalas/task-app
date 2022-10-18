import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/task-app/' : '/',
    build: {

        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: `assets/build_[name].[hash].js`,
                chunkFileNames: `assets/build_[name].[hash].js`,
                assetFileNames: `assets/build_[name].[hash].[ext]`,
            },
        }
    },
})
