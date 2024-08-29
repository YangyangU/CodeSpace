FROM hub.atomgit.com/amd64/node

EXPOSE 3001
WORKDIR /app

COPY . .

RUN npm install

CMD ["node","index.js"]