import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  "extends": ["eslint:recommended", "plugin:react/recommended"]

  plugins: [react()],
})
