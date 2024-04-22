const http = require('http')
const url = require('url')// url模块  做字符串url路径的解析
const path = require('path')// path 解析路径 解析绝对相对
const fs = require('fs') // 文件模块
const mime = require('mime-types')
const checksum = require('checksum')

const server = http.createServer((req, res) => {

    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`))) // __dirname 绝对路径

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath) 
        const isDir = stats.isDirectory()

        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir || fs.existsSync(filePath)) {

            const content = fs.readFileSync(filePath)
            const {ext} = path.parse(filePath)
            const timeStamp = req.headers['if-modified-since']
            let status = 200
            if(timeStamp && Number(timeStamp) === stats.mtimeMs) {
                status = 304//资源未修改
            }


            res.writeHead(status,{
                "Content-Type": mime.lookup(ext),
                // 'cache-control':'max-age=86400',//一天,第一次请求,后面一天都被缓存
                // 'Expires': 'Mon Apr 22 2024 21:03:31 GMT+0800'
                'last-modified':stats.mtimeMs//时间戳
                // 'etag':`${content}`//签名
            })
            return res.end(content)
            
            // checksum.file(filePath,(err,sum)=>{
            //     const resStream = fs.createWriteStream(filePath)
            //     sum = `"${sum}"`
            //     if(req.headers['if-none-match'] === sum){
            //         res.writeHead(304,{
            //             'Content-Type': mime.lookup(ext),
            //             'etag':sum
            //         })
            //     }else{
            //         res.writeHead(200,{
            //             'Content-Type': mime.lookup(ext),
            //             'etag':sum
            //         })
            //         return resStream,pipe(res)
            //     }
            // })

        }

        
    }

    res.writeHead(404,{
        "Content-Type":'text/html'
    })
    res.end('<h1>not found</h1>')
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})