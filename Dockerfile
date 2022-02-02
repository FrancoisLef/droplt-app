###
# Builder
###
FROM node:16-alpine as builder

WORKDIR /builder

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN yarn install

COPY . ./

RUN yarn build

###
# Runner
###
FROM fholzer/nginx-brotli as runner

COPY --from=builder /builder/build /usr/share/nginx/html
COPY --from=builder /builder/.env /usr/share/nginx/html/.env
COPY --from=builder /builder/nginx.conf /etc/nginx/conf.d/default.conf

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm i -g runtime-env-cra

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh", "-c", "runtime-env-cra && nginx -g \"daemon off;\""]
