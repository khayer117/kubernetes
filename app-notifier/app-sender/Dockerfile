FROM node:12.18.0
WORKDIR /app-notfier
EXPOSE 3000

COPY package.json .
COPY package-lock.json .
RUN npm install

CMD [ "npm", "start" ]

COPY . .



