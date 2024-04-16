// // 此文件运行在 Node.js 服务器上
// import { createSSRApp } from 'vue'
// // Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
// import { renderToString } from 'vue/server-renderer'

// const app = createSSRApp({
//   data: () => ({ count: 1 }),
//   template: `<button @click="count++">{{ count }}</button>`
// })

// renderToString(app).then((html) => {
//   console.log(html)
// })

import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });

  app.mount('#app')
})

server.use(express.static('.'))


server.listen(3000, () => {
  console.log('ready')
})

