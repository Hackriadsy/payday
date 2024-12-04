FROM node:22-alpine

WORKDIR /payday/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npm run compile
CMD ["npm", "start"]