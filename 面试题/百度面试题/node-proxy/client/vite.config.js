import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
})

// axios.get('/api')被转发到target路径下
// vite帮我们启动了一个node服务，且帮我们朝'http://localhost:3000'发起请求，因为后端没有同源策略
// 所以，vite中的node服务能直接请求到数据，再提供给前端使用