srv=my-back-system-react
echo "项目名为$srv"
docker stop $srv
docker rm -f $srv
docker rmi -f $srv
docker build -f Dockerfile -t $srv:1.0.0 .
docker run -d -p 2222:80 $srv:1.0.0