import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用相对路径，适配自定义域名部署
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
