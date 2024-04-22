const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path');
const crypto = require('crypto');
const mime = require('mime-types')

const server = http.createServer((req, res) => {

    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        const isDir = stats.isDirectory()

        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir || fs.existsSync(filePath)) {
            // 生成内容的哈希值作为ETag
            const content = fs.readFileSync(filePath)
            const {ext} = path.parse(filePath)
            const etag = crypto.createHash('md5').update(content).digest('hex')

            // 如果请求中有If-None-Match头，检查其值是否与ETag匹配
            if (req.headers['if-none-match'] === etag) {
                // 如果匹配，返回304 Not Modified
                res.writeHead(304, {
                    'Content-Type':  mime.lookup(ext),
                    'ETag': etag,
                });
                return res.end();
            }

            // 如果不匹配，返回内容和ETag
            res.writeHead(200, {
                'Content-Type':  mime.lookup(ext),
                'ETag': etag
            });
            return res.end(content);
        }
    }

    res.writeHead(404, {
        "Content-Type": 'text/html'
    });
    res.end('<h1>Not Found</h1>');
});

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
