FROM nginx:1.16.0-alpine
WORKDIR /usr/src/app
COPY . .

#RUN yarn add @design-system-rt/rtk-ui-kit
#RUN yarn add @design-system-rt/rtk-fonts
#RUN npm install
#RUN npm run build

COPY build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

