import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 开发环境使用根路径,生产环境(GitHub Pages)使用仓库名路径
  base: mode === 'production' ? '/shangyuweitingapp/' : '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
}))
