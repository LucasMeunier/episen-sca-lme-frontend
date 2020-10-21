# Stage 1
FROM node:alpine as build-step

#RUN addgroup -S angular && adduser -S angular -G angular
#USER angular:angular

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist/episen-sca-lme-frontend /usr/share/nginx/html
EXPOSE 80
