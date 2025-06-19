import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/yelverton/', // 👈 MUST match the repo name exactly
  plugins: [react()],
})
