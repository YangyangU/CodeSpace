# node镜像打包
# FROM node:latest AS frontend-builder
# WORKDIR /build-app
# COPY . .
# RUN npm install
# RUN npm run build

# COPY --frontend-builder /build-app /usr/share/nginx/html

# 上面操作可以替换手动打包dist

# nginx镜像打包
FROM nginx:latest
EXPOSE 80
WORKDIR /app
COPY dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]