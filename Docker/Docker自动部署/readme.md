# 安装 docker-compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

# 对二进制文件应用可执行权限
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

# 验证
```bash
docker-compose -v
```