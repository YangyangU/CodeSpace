import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath,URL } from 'url'
// 全局引入
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  }
})
