import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ สำคัญ: ใส่ชื่อ Repo ของคุณใน GitHub (ต้องมี / ปิดหน้าหลัง)
  // ถ้า Repo ชื่อ ptg-queue ให้ใส่ '/ptg-queue/'
  base: '/ptg-queue/', 
  build: {
    outDir: 'dist',
  }
})