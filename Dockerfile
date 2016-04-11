FROM node:4

ADD . .

RUN npm install

CMD ["node", "index.js"]
