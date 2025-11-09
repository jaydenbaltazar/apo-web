import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ensures correct asset paths on custom domain
  build: {
    outDir: 'dist', // where Vercel will look for built files
  }
})
