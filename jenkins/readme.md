# 安装docker-compose

```bash
 curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose #太慢了

# 自己去github下
mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
# 授予执行权限
chmod +x /usr/local/bin/docker-compose
# 检查
docker-compose --version
```

```bash
 cd
 # 将 Jenkins 相关的文件都放在这里
 mkdir jenkins
 cd jenkins
 ​
 # 创建 Jenkins 配置文件存放的地址，并赋予权限
 mkdir jenkins_home
 chmod -R 777 jenkins_home
 ​
 pwd
 # /root/jenkins
```


```bash
touch docker-compose.yml
vim docker-compose.yml
```

```yml
version: '3'
services:
  jenkins:
    image: jenkins/jenkins:lts
    container_name: 'jenkins'
    restart: always
    ports:
      - "8999:8080"
    volumes:
      - /root/jenkins/jenkins_home:/var/jenkins_home
```