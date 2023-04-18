FROM node:16
RUN npm install -g pnpm@7

WORKDIR /app/

COPY . /app/ 


RUN pnpm install \
   && pnpm run build