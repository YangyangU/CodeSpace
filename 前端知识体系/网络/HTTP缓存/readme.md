# 强缓存
cache-control: max-age=31536000 优先级高
expires: Wed, 21 Oct 2021 07:28:00 GMT

# 协商缓存
etag: "51142c1f7ebca9b7d47163ad1f00e431"
if-none-match: "51142c1f7ebca9b7d47163ad1f00e431"

last-modified: Wed, 21 Oct 2021 07:28:00 GMT
if-modified-since: Wed, 21 Oct 2021 07:28:00 GMT

# 设置了强缓存，让用户拿到最新资源
1. 修改资源名
2. 设置cache-control: no-cache
3. 设置协商缓存

# 三级缓存原理 (访问缓存优先级)
先在内存中查找,如果有,直接加载。
如果内存中不存在,则在硬盘中查找,如果有直接加载。
如果硬盘中也没有,那么就进行网络请求。
请求获取的资源缓存到硬盘和内存。
