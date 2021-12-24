# Proxy Nodejs

## Instalacion
[Instalar NodeJS](https://nodejs.org/en/download/)

    npm install

## Correr localmente

    npm start

La app corre por default en puerto 3000, se puede cambiar con la variable de ambiente `NODE_PORT` agregando un archivo .env junto a index.js.

`.env`:

    NODE_PORT=<NUMERO PUERTO>


## Compilar para windows

Para compilar solo se debe correr.

    npm run build

La app corre por default en puerto 3000, se puede cambiar con la variable de ambiente `NODE_PORT` en una terminal de Windows:

    setx NODE_PORT "<PUERTO>"
