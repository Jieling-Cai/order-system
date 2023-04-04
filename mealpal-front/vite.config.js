import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const baseURl = "http://localhost:3000"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, //default port
    proxy: {
      '/guestinfo': {
        target: baseURl,
        changeOrigin: true
      },
      '/restaurant': {
        target: baseURl,
        changeOrigin: true
      }
    }
  },
})
