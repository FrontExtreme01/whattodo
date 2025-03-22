

[![Abrir sitio web][wtd-badge]][wtd-url]

## 🚀 Estructura del Proyecto

Dentro del proyecto Astro, verá las siguientes carpetas y archivos:

```text
/
├── public/
    └── assets/
    └── fonts/
    └── pdf/
├── src/
│   └── components/
│       └── cards/
│       └── detail-content/
│       └── email/
│       └── extras/
│       └── global/
│       └── pages/
│   └── content/
│   └── i18n/
│   └── img/
│   └── layouts/
│   └── pages/
│       └── index.astro 
│   └── scripts/
│   └── styles/
│   └── utils/
└── package.json
```

### Components

Dentro de `src/components` se encuentran todos los componentes ordenados por elementos generales.

- `detail-content` Hace referencia a todos los componentes utilizados dentro de la vista del detalle de un tour, nightclub, yacht, etc.
- `email`  Hace referencia a los templates y formularios usados para enviar un correo, dentro se encuentra el formato de correo para un usuario y el admin en caso de requerirse
- `extras` Hace referencia a todos los componentes que son usados una vez en cualquier parte del proyecto, en caso de que el componente sea reutilizable se reasignara a un folder correspondiente.
- `global` Hace referencia a todos los componentes generales del sitio o que son usados más de una vez o pertenecen a un Layout.
- `pages` Hace referencia a las páginas creadas dentro de `src/pages/` esto es de ayuda para mantener un solo componente y poder utilizarlo mediante **i18n**, se debe mantener un nombre acorde al slug de la página ó alguna referencia acorde.
   > [!IMPORTANT]
    > No puede nombrarse el componente de la misma manera que el archivo dentro de `src/pages`

### Content

Dentro de `src/content` se encuentran todas las colecciones categorizadas, dentro de cada coleccion va un folder por elemento/producto y dentro van los archivos **MDX**, el formato de creación es el siguiente:

```text
├── src/
│   └── content/
│       └── coleccion/
│           └── item/
│               └── en.mdx
│               └── es.mdx
```

- `colección` Hace referencia al nombre de la colección
- `item` Hace referencia al nombre del producto, *debe ser un folder no un archivo*.
- `.mdx` Los archivos mdx deben mantenerse bajo el nombre del prefijo de idioma para identificar a cual pertenece.

Dentro de `src/content` existen dos archivos **Config.ts** y **functions**

- **Config:** Incluye toda la configuración y los esquemas de las colecciones, utiliza **Zod** para la validación de los datos.
- **Functions:** Incluye todas las funciones para filtrar las colecciones, dentro de este archivo igual pueden ir funciones de utilidad para el sitio.


> [!NOTE]
> Dentro de cada colección el nombre asignado al folder del elemento/producto sigue un formato de nombrado en donde va primero el numero para un ordenamiento de los productos.

### i18n

Dentro de ``src/i18n` se encuentran archivos que sirven para la traducción completa de los elementos del sitio y funcionalidades.
- **index.ts:** contiene una constante que retornara el archivo de traducción dependiendo el prefijo pasado con base a la URL.
- **ui.ts:** contiene las constantes de lenguaje y traducciones ui generales. *Las traducciones UI solo debe ser creadas para elementos breves y muy generales como el caso del Header o Footer*.
- **utils.ts:** contiene las funciones utilizadas en el sitio web para su correcta traducción de los elementos UI, adicional del enrutado dinamico por medio de los parametros pasados mediante la URL.

### img

Dentro de `src/img` se encuentran todas las imagenes utilizadas en el sitio, las que debemos y podemos optimizar mediante astro, como lo es el caso de sliders, galerías y otros elementos que sean parte de un producto o informativo.

Dentro de este directorio se encuentran tres archivos:
- **allIcons.ts:** Incluye todos nuestros iconos importados desde `src/img/icons` para utilizar en nuestros componentes **.astro**
- **allImages.ts:** Incluye todas nuestras imagenes generales importados desde `src/img/...`
- **allSlides.ts:** Incluye todas las imagenes utilizadas en nuestro componente slider, dentro se encuentra una función que nos permite obtener los slides por categoría e idioma de igual manera por medio de la medida de la pantalla.

> [!NOTE]
> Las imagenes dentro de `public` son para fondos o covers en donde necesitemos que la url sea relativa.

### Layouts

Dentro de `src/layouts` se encuentran todos los componentes base para la construcción de cada apartado, como lo sería el caso del home o la vista de detalle de cada categoría de nuestras colecciones. De esta manera mantenemos un mismo formato sin tener que replicar elementos que utilizamos con frecuencia.

### Pages

Dentro de `src/pages` se encuentra lo que es nuestras rutas del sitio, es el único directorio reservado por Astro al igual que el de **content**, este directorio no debe ser alterado porque sin el no tendriamos páginas ni rutas.

Dentro de este directorio el nombre que sea asignado al archivo será el nombre de la ruta, el **slug**

> [!NOTE]
> `src/pages` solo es utilizado para la creación de la ruta pero es alimentado mediante el componente que se le importe desde `src/components/pages`.

### Scripts y Styles

Dentro de `src/scripts` y `src/styles` se encuentran los archivos base para el sitio web.

### Utils

Dentro de `src/utils` se encuentran todos aquellos archivos que son de utilidad y usados en un solo lado pero repetitivos, aqui deben ir todos aquellos archivos que sean de utilidad para el sitio.


## 🛠️ Stack

[![Astro][astro-badge]][astro-url]
[![Typescript][typescript-badge]][typescript-url] 
[![Tailwind CSS][tailwind-badge]][tailwind-url] 
[![React JS][react-badge]][react-url]  

[wtd-badge]: https://whattodocan.netlify.app/assets/logos/logo-large.png
[wtd-url]: https://whatotodoincancun.com/
[astro-url]: https://astro.build/
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[typescript-url]: https://www.typescriptlang.org/
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[tailwind-url]: https://tailwindcss.com/
[react-url]: https://es.react.dev/
[react-badge]: https://img.shields.io/badge/react-007ACC?style=for-the-badge&logo=react&logoColor=white&color=58c4dc