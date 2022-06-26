FROM node:16.15-alpine3.14

ARG PORT
ENV PORT $PORT
EXPOSE $PORT

RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
RUN npm install

RUN adduser -S sihan
RUN chown -R sihan /home/app
USER sihan

RUN npm run test

ENTRYPOINT [ "npm","run","start" ]