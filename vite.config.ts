import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ssl()
  ],
  base: '/',
  build: {
    outDir: 'docs'
  }
})
