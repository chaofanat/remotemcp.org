import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { VueMcp } from 'vite-plugin-vue-mcp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCommonjs(),VueMcp()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
    rollupOptions: {
      external: ['fsevents'],
    },
  },
  define: {
    'global': {},
    'process.env': {},
    'Buffer': ['buffer', 'Buffer'],
  }
})
