# Builder stage
FROM --platform=linux/amd64 node:20.10.0-alpine as builder

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

# Development stage
FROM --platform=linux/amd64 node:20.10.0-alpine as development

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# Production stage
FROM --platform=linux/amd64 node:20.10.0-alpine as production

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist .
COPY --from=builder /usr/src/app/package*.json .
RUN npm ci
EXPOSE 3000
CMD ["node", "main"]