# Tutorial: aplicaciones Web con React y Next I

## Clonar el repositorio https://github.com/PabloSzx/INFO104-2021-1

`git clone https://github.com/PabloSzx/INFO104-2021-1`

Este repositorio contiene una aplicación Web usando **React** y **Next.js**. React permite creación de interfaces de usuario **reactivas** y **dinámicas**. **Next.js** es un framework que que combina **React** y **Node.js** para que podamos construir aplicaciones Web completas en javascript (front-end y back-end) con una orientación a componentes. Revisar definiciones acá [tutorial de Pablo](https://observablehq.com/@pabloszx/info104-2020-2-introduccion-a-react?collection=@pabloszx/info104-2020-2)

## Instalar dependencias, módulos node
Una vez se haya descargado el repositorio, entrar en la carpeta del repositorio y hacer 

`$ npm install`

Esto descarga todos los módulos (de node) necesarios que no se versionan en el repositorio (por qué crees que estos módulos no se versionan en el repositorio que clonamos??). Puede demorar algunos minutos dependiendo de tu conexión, porque descarga varios módulos, entre ellos next y react, además de módulos para _levantar_ servidores Web de desarrollo, herramientas de com. 

## Correr la aplicación Web en un servidor Web
El proyeto contienen una plaicación Web que necesita _correr_ en un servidor Web, es decir, la aplicación Web necesita ser _servida_. Para esto hacemos:

`$ npm run dev`

Esto _corre_ (run) la aplicación Web en un entorno de desarrollo (dev)
Para ver la aplicación, carga entu navegador la siguiente dirección:

`http://localhost:3000`

## Estructura general de la aplicación
