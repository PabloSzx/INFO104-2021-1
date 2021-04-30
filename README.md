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

- /pages : aquí pondremos nuestro código javascript. Cada archivo es una página (siempre?)
- /public : contiene elementos (estáticos?) usados en la aplicación Web que se ofrecen 'publicamente' como imágenes y hojas de estilo
- /.gitignore este archivo oculto lista todos los archivos y carpetas que git ignorará (archivos que no son versionados... para qué?)
- /package.json : define atributos generales de la aplicación como nombre y versión, además de dependencias y versiones de librerías o módulos necesarios
- /package-lock.json : define en detalle todos los módulos y sus dependencias (por qué no en package.json?)
- /node_modules : contiene todo el software de base que usamos, los módulos node con los que construimos nuestra aplicación, como next, react, entre otros. Esta carpeta es pesada :S

Al correr la aplicación y cuando cargamos una ruta en el navegador el http://localhost:3000, la aplicación carga el archivo pages/index.js. Podemos cargar directamente una página si agregamos el nombre de la página en la URL (sin .js)

Ej: `http://localhost:3000/response`

(sin embargo, **no** se puede cargar index así http://localhost:3000/index !!)

## Agregando una página

Creemos el archivo `pages/about.js`. En este archivo escribe

```
import Head from "next/head";

const About = () => {
  return ();
};
export default About;
```

Este es nuestro código base. Luego escribiremos el contenido de la página en el return (). El contenido puede combinar javascript (entre {}), JSX, HTML, CSS, ... Mira el ejemplo en las páginas index.js o response.js.
