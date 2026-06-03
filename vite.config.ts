import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // GitHub Pages需要相对路径
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
})
