ARG IMAGE=node
ARG TAG=16.16.0-alpine

FROM ${IMAGE}:${TAG}
RUN apk update && apk upgrade
RUN mkdir -p /opt/apps/node/
WORKDIR /opt/apps/node/
COPY package.json ./
RUN npm install
COPY ./src ./src
RUN chown -R node:node /opt/apps/node
USER node
EXPOSE 3000
RUN ls -l

CMD [ "npm", "start" ]