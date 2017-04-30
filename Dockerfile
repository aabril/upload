FROM nodesource/node:6

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY . /home/nodejs/app
RUN npm install --production

CMD ["npm", "start"]
