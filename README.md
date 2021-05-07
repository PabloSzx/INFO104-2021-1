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

# Tutorial: aplicaciones Web con React y Next, parte II

## Actualizar el repositorio local

Ir a la carpeta del proyecto y hacer

`$ git pull origin main`

Esto descargará del repositorio remoto varias nuevas páginas y componentes

## Estableciendo un layout común

El componente Layout (components/layout.js) define la organización completa de cada página en términos del header que presenta un menú para acceder a las páginas, y el contenido (main). Lego cada pagina (ver por ejemplo page1.js) carga el componente Layout pasándole parámetros que en react se conocen como _props_ (properties).

El componente Layout recibe dos props:

- _pageId_ que se pasa como propiedad de la etiqueta Layout. Por ejemplo en page1.js

`<Layout pageId="page1">`

- _children_ que representa todos los elementos (componentes, etiquetas html) dentro de Layout

## Comunicando componentes

Hay varias formas de pasar información entre componentes. Entre un parent y un child (componente padre contiene componentes hijos), se puede pasar información via _props_ como se ejemplifica en la sección anterior. Para pasar información desde un componente a su _parent_ se pueden usar funciones **callback**.

El componente ViewCount ejemplifica esto. ViewCount es cargado en Layout, como último elemento en el menu (header). Al cargarlo se le pasan dos props: count y reset.

`<ViewCount count={nViews} reset={resetViews} />`

Notar que a la prop reset se le pasa una función. Esta función es un callback, porque estña definida el el componente parent Layout y ViewCount la invocará cada vez que el evento click de un botón.

`<button onClick={props.reset}>reset</button>`

## Cargando contenido

Hay varias formas de cargar contenido, ya sea de archivos en el computador, de una dirección web (via http o https) o una base de datos. En este ejemplo usaremos fetch de una URL.

Se incluye la carpeta /public/data con un archivo json que contiene una lista de cosas por hacer (To Do List). Este contenido se ha puesto un public porque cargaremos este json usando fetch de una url. La carga de este contenido se hace en la página pageList.js usando la función `getServerSideProps`. Notar que esta función agrega a props la variable _data_ y que PageList lo declara: `export default function PageList({data})...`

Luego PageList agega un componente _TodoItem_ por cada elemento de _data_

```
{
  data.map((item) => (
    <TodoItem item={item} />
  ))
}
```
