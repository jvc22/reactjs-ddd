import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest/node'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
  },
}) as UserConfig & {
  test: InlineConfig
}
