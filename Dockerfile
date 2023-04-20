FROM node:16
RUN npm install -g pnpm@7

WORKDIR /app/

COPY . /app/ 


RUN pnpm install \
   && pnpm run build

FROM nginx:1.24.0
COPY --from=0  /app/default.conf /etc/nginx/conf.d/
COPY --from=0  /app/dist/ /usr/share/nginx/html/

