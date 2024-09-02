# 项目部署
## Nginx部署前端单页应用刷新404
location / {
    # 如果资源不存在，则回退到 index.html，再由前端路由进行加载
    try_files  $uri $uri/ /index.html;
}
## 解决跨域
location /api/ {
    proxy_pass http://127.0.0.1:9001/api/; 
}
