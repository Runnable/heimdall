FROM mhart/alpine-node

ADD . .

RUN apk add --no-cache make gcc g++ python

RUN npm install

CMD ["node", "index.js"]
