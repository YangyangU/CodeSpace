- https://www.bilibili.com/video/BV1Zn4y1X7AZ?p=7&spm_id_from=pageDriver&vd_source=5f9f9d999e4a2613e4893f0be1684f97

# Docker安装

## 卸载docker
```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

## 配置阿里云镜像
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## docker engine
```bash
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## start docker
```bash
sudo systemctl start docker
```


## 查看运行中的应用
```bash
docker ps
```

## docker 开机自启
```bash
sudo systemctl enable docker
```

## 配置加速器
```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://ccr.ccs.tencentyun.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

# Docker使用

## 搜索镜像
```bash
docker search nginx
```

## 拉取镜像 接镜像名和版本
```bash
docker pull nginx:1.21.6
```

[dockerhub](https://hub.docker.com/)

## 拉取镜像 直接接镜像名
```bash
docker pull nginx
```

## 查看本地镜像
```bash
docker images
```

## 创建挂在目录
```bash
mkdir -p /home/nginx/conf
mkdir -p /home/nginx/log
mkdir -p /home/nginx/html
```

## 容器中的nginx.conf文件和conf.d文件夹复制到宿主机

```bash
# 生成容器
docker run --name nginx -p 9001:80 -d nginx
# 将容器nginx.conf文件复制到宿主机
docker cp nginx:/etc/nginx/nginx.conf /home/nginx/conf/nginx.conf
# 将容器conf.d文件夹下内容复制到宿主机
docker cp nginx:/etc/nginx/conf.d /home/nginx/conf/conf.d
# 将容器中的html文件夹复制到宿主机
docker cp nginx:/usr/share/nginx/html /home/nginx/
```

## Docker 创建Nginx容器
```bash
# 直接执行docker rm nginx或者以容器id方式关闭容器
# 找到nginx对应的容器id
docker ps -a
# 关闭该容器
docker stop nginx
# 删除该容器
docker rm nginx
# 删除正在运行的nginx容器
docker rm -f nginx


docker run \
-p 9002:80 \
--name nginx \
-v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /home/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /home/nginx/log:/var/log/nginx \
-v /home/nginx/html:/usr/share/nginx/html \
-d nginx:latest
```



## 运行镜像
```bash
docker run nginx
docker run -d nginx # 后台运行
docker run -d --name mynginx nginx # 后台运行
```

## 进入容器
```bash
docker exec -it nginx bash