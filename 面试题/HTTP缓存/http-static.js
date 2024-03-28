const http = require('http')
const url = require('url')// url模块  做字符串url路径的解析
const path = require('path')// path 解析路径 解析绝对相对
const fs = require('fs') // 文件模块
const mime = require('mime-types')

const { log } = require('console')

const server = http.createServer((req, res) => {
    // 将前端请求的地址转换成真实的url，再拼接www这个路径，最后读取整个文件的绝对路径
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`))) // __dirname 绝对路径
    // console.log(filePath);
    if (fs.existsSync(filePath)) { // 判断资源是否存在
        const stats = fs.statSync(filePath) // statSync读取文件的详细参数，比如创建时间等
        // console.log(stats);
        const isDir = stats.isDirectory() // 是文件(false)还是文件夹(true)
        // console.log(isDir);
        if (isDir) { // 文件夹
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir || fs.existsSync(filePath)) { // 文件
            //读取资源文件向前端返回
            const content = fs.readFileSync(filePath)
            const {ext} = path.parse(filePath)
            console.log(ext);//后缀

            // if(ext === '.jpg'){
            //     res.writeHead(200,{"Content-Type": "image/jpg"})//返回图片格式
            // }else{
            //     res.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
            // }

            //避免反复if/else
            res.writeHead(200,{"Content-Type": mime.lookup(ext)})
            // return res.end(content)

            const fileStream = fs.createReadStream(filePath)//读取文件将文件读成流类型
            fileStream.pipe(res)//将流类型资源汇入到响应体中
        }
    }

    res.writeHead(404,{"Content-Type":'text/html'})
    res.end('<h1>not found</h1>')
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})