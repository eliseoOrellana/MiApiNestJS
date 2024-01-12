# Establece la imagen base para desarrollo
FROM node:18.13 AS development

WORKDIR /usr/src/app

COPY package*.json ./

# Instala las dependencias para desarrollo
RUN npm install
RUN npm install -g @angular/cli

COPY . .

# Arranca la aplicación de Angular en modo desarrollo
CMD ["npm", "start"]

# Establece la imagen base para producción
FROM node:18.13 AS production

WORKDIR /usr/src/app

COPY package*.json ./

# Instala las dependencias para producción
RUN npm install --production

COPY . .

# Construye la aplicación de Angular para producción
RUN npm run build

# Arranca un servidor HTTP simple para servir la aplicación construida
CMD ["npm", "run", "start:prod"]
