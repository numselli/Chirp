FROM node:21.7.2-bookworm-slim
ENV NODE_ENV production

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "index.mjs"]