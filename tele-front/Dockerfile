FROM node:12 as builder

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/tele-front

RUN yarn add @design-system-rt/rtk-ui-kit
RUN yarn add @design-system-rt/rtk-fonts
RUN npm install
RUN npm run build


FROM nginx:1.16.0-alpine
WORKDIR /usr/src/app
COPY . .

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

