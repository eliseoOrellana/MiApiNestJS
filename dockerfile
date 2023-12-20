# Usa la imagen oficial de Node como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

RUN npm run build

# Expone el puerto 4200 para el servidor de desarrollo de Angular
EXPOSE 4200

# Comando predeterminado para iniciar el servidor de desarrollo de Angular
CMD ["npm", "start"]