import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // hmr: {
    //   protocol: 'ws',
    //   host: 'localhost'
    // },
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()]
})
