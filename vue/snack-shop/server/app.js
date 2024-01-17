const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const user = require('./routes/user.js')

app.use(cors())
app.use(bodyParser())
app.use(user.routes(),user.allowedMethods())

app.listen(3000,()=>{
    console.log('listening on 3000');
})