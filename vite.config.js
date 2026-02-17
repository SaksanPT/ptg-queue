import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ สำคัญ: base ต้องตรงกับชื่อ Repository บน GitHub ของคุณ
  // ในที่นี้คือ /ptg-queue/
  base: '/ptg-queue/', 
  build: {
    outDir: 'dist',
  }
})