import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/fala_me_de_amor/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
