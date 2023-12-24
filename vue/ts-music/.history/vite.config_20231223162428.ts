import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers:{ElementPlusResolver}
    // }),
    // Components({
    //   resolvers:{ElementPlusResolver}
    // })
  ],
  resolve:{
    alias:{
      // '@':fileURLToPath(new URL('./src'))
    }
  }
})
