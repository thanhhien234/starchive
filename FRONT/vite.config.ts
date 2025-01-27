/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
  resolve: {
    alias: [
      { find: "@_src", replacement: "/src" },
      { find: "@_components", replacement: "/src/components" },
      { find: "@_assets", replacement: "/src/assets" },
      { find: "@_services", replacement: "/src/services" },
      { find: "@_types", replacement: "/src/types" },
    ]
  }
})
