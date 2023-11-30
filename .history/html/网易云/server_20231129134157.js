const Koa = require('koa');
const app = new Koa()
const cors = require('koa-cors')

app.use(cors())

function main(ctx) {
  if (ctx.path == '/login') {
    const { username, password } = ctx.query
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (reg.test(username)) {
      console.log(`当前正在登录的账号是：${username} -- 密码：${password}`);
      ctx.body = {
        code: 0,
        message: '登录成功'
      }
    } else {
      ctx.body = {
        code: 1,
        message: '邮箱格式不正确'
      }
    }
    
  }
}

app.use(main)

app.listen(3000, () => {
  console.log('listening on port 3000');
})