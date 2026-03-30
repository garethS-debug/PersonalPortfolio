import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Include uppercase .PNG files as assets so Vite doesn't try to parse them as JS
  assetsInclude: ['**/*.PNG'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
