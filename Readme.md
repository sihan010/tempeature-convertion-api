docker build -t sihan/temperature_api:1.0.0 .
docker run -e "PORT=3000" -it -p 3001:3000 --name temperature_app sihan/temperature_api:1.0.0
