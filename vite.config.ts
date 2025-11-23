import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위한 base path 설정
  // repository 이름이 'blog-web'인 경우: '/blog-web/'
  // username.github.io 형식인 경우: '/' (기본값)
  base: process.env.GITHUB_PAGES === 'true' ? '/blog-web/' : '/',
})
