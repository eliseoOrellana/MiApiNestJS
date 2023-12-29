#multistage

# Etapa de construcción
FROM node:20.10.0-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD  ["npm", "run", "build"]
#crea carpeta .dist ()typescript transpila a javascript)

# Etapa de desarrollo

FROM node:20.10.0-alpine AS development
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD  ["npm", "run", "start:dev"]

# Etapa de producción

FROM node:20.10.0-alpine AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN npm install --only=production
EXPOSE 3000
CMD  ["node","dist/main"]