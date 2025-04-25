import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { VueMcp } from 'vite-plugin-vue-mcp'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    viteCommonjs(),
    VueMcp()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'buffer': 'buffer/',
      '~data': path.resolve(__dirname, './data')
    },
  },
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: ['buffer'],
  },
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      external: ['fsevents'],
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
    copyPublicDir: true,
  },
  define: {
    'global': {},
    'process.env': {},
    'Buffer': ['buffer', 'Buffer'],
  },
  publicDir: ['public', 'data']
})
