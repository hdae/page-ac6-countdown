import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: "/page-ac6-countdown",
  plugins: [solid()],
})
