FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8000

CMD ["pnpm", "run", "start"]