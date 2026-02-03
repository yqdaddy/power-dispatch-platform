import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deployment configuration
  // Update 'base' to match your repository name if deploying to https://<username>.github.io/<repo>/
  base: '/power-dispatch-platform/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
