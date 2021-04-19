FROM node:14.15.1
WORKDIR /app

COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "start"]