import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases({
    // This is the path to the file that contains the theme object
    // It is relative to the vite.config.ts file
    useTypescript: true,
    prefix: '!',
  })],
  server: {
    port: 3000,
    proxy: {
      '/api': "http://localhost:8080",
    },
  },
})
