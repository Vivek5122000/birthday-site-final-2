import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/birthday-site-final-2/',  // <-- add this
  plugins: [react()],
})
