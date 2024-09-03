# HTTP状态码

100 Continue
101 Switching Protocols
200 OK
204 No Content 没有body
206 Partial Content
301 Moved Permanently 永久重定向
302 Found   临时重定向
304 Not Modified  资源未改变
400 Bad Request 请求格式错误
401 Unauthorized  未授权
403 Forbidden 禁止访问
404 Not Found 资源不存在
500 Internal Server Error 服务器内部错误
501 Not Implemented 服务器暂不支持
502 Bad Gateway 网关错误
503 Service Unavailable 服务繁忙

# HTTP请求头
Accept
Authorization
Cache-Control
Connection
Cookie
Content-Length
Content-Type
Host
If-Match
If-Modified-Since
If-None-Match
If-Unmodified-Since
User-Agent

# HTTP响应头
Age
Allow
Cache-Control
Content-Length
Content-Type
Date
ETag
Expires
Last-Modified
Location
Pragma
Set-Cookie

# GET和POST区别
GET：
 1. 请求参数在url中
 2. 请求参数可以被缓存
 3. 请求参数长度有限制
 4. 幂等
POST：
 1. 请求参数在body中
 2. 请求参数不可被缓存
 3. 请求参数长度无限制
 4. 非幂等

# HTTP/0.9
1. 只有请求行
2. 没有响应头
3. 只有GET请求
4. 只能传输HTML数据

# HTTP/1.0
1. 增加头部
2. 增加状态码
3. 增加POST请求
4. 支持传输非HTML数据

# HTTP/1.1
1. 支持持久连接
2. 支持缓存
3. 支持Host头

# HTTP/2.0
1. 二进制分帧层，二进制数据传输，减少传输时间
2. 多路复用，消除队头阻塞
3. 头部压缩
4. 服务端推送

# HTTP/3.0
1. 基于UDP的QUIC

# HTTPS
流程：
1. 客户端向服务器发送一个请求，请求中包含一个随机数A
2. 服务器返回一个证书，证书中包含一个公钥B，以及一个随机数C
3. 客户端验证证书的合法性，如果合法，则生成一个随机数D，并使用公钥B加密D，发送给服务器
4. 服务器使用私钥解密D，得到随机数D
5. 客户端和服务器使用随机数A、C、D生成一个对称加密的密钥，用于后续的通信
