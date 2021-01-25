FROM node:14-alpine

EXPOSE 8080

CMD [ "npm", "start" ]

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY index.js .
