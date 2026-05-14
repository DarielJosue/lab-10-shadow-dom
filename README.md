# UCR · Sede Guanacaste | Multimedios

Proyecto desarrollado utilizando Web Components con Shadow DOM, slots, atributos HTML y estilos encapsulados.

---

# Índice de contenidos

- [UCR · Sede Guanacaste | Multimedios](#ucr--sede-guanacaste--multimedios)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Características del proyecto](#características-del-proyecto)
- [Web Components utilizados](#web-components-utilizados)
  - [`<poster-acoso>`](#poster-acoso)
    - [Atributos configurables](#atributos-configurables)
    - [Ejemplo de uso](#ejemplo-de-uso)
    - [Slots disponibles](#slots-disponibles)
    - [Ejemplo usando slots](#ejemplo-usando-slots)
  - [`<poster-aulas>`](#poster-aulas)
    - [Atributos configurables](#atributos-configurables-1)
    - [Ejemplo de uso](#ejemplo-de-uso-1)
    - [Slots disponibles](#slots-disponibles-1)
- [Variables CSS globales](#variables-css-globales)
  - [Variables configurables](#variables-configurables)
- [Shadow DOM](#shadow-dom)
- [Renderizado del componente](#renderizado-del-componente)
- [Comunicación entre componente y HTML](#comunicación-entre-componente-y-html)
- [CSS Parts](#css-parts)
- [Ejemplo de cambios en consola](#ejemplo-de-cambios-en-consola)
  - [Modificar contenido del componente `<poster-acoso>`](#modificar-contenido-del-componente-poster-acoso)
  - [Modificar contenido del componente `<poster-aulas>`](#modificar-contenido-del-componente-poster-aulas)
  - [Modificar variables CSS globales](#modificar-variables-css-globales)
  - [Acceder al Shadow DOM](#acceder-al-shadow-dom)
  - [Probar slots dinámicamente](#probar-slots-dinámicamente)

# Estructura del proyecto

```txt
.gitignore
README.md

src/
│   index.html
│   main.js
│
├───components
│       PosterAcoso.js
│       PosterAulas.js
│
├───css
│       global.css
│
└───modules
```

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Web Components
- Shadow DOM
- Slots
- CSS Custom Properties

---

# Características del proyecto

- Componentes reutilizables.
- Estilos encapsulados mediante Shadow DOM.
- Comunicación mediante atributos HTML.
- Uso de slots para contenido personalizable.
- Variables CSS globales configurables.
- Componentes totalmente modulares.

---

# Web Components utilizados

## `<poster-acoso>`

Componente principal del afiche de campaña contra el acoso.

### Atributos configurables

| Atributo     | Descripción                 |
| ------------ | --------------------------- |
| `accent-1`   | Primer símbolo decorativo   |
| `title-1`    | Primer bloque del título    |
| `title-2`    | Segundo bloque del título   |
| `title-3`    | Tercer bloque del título    |
| `accent-2`   | Segundo símbolo decorativo  |
| `subtitle-1` | Mensaje secundario          |
| `subtitle-2` | Mensaje principal           |
| `qr-label`   | Texto superior del QR       |
| `logo-1`     | Primer logo inferior        |
| `logo-2`     | Segundo logo inferior       |
| `logo-3`     | Tercer logo inferior        |
| `image-src`  | Ruta de la imagen           |
| `image-alt`  | Texto alternativo de imagen |

---

### Ejemplo de uso

```html
<poster-acoso
  accent-1="¡"
  title-1="LA SEDE"
  title-2="TE"
  title-3="ACOMPAÑA"
  accent-2="!"
  subtitle-1="El respeto no se negocia"
  subtitle-2="¡Pará ya de acosar!"
  qr-label="Escanea este QR."
  logo-1="UCR"
  logo-2="UCR libre de acoso"
  logo-3="SG Sede Guanacaste"
  image-src="./assets/images/imagen.png"
  image-alt="Personas"
></poster-acoso>
```

---

### Slots disponibles

| Slot         | Descripción                   |
| ------------ | ----------------------------- |
| `hero-image` | Reemplaza la imagen principal |
| `qr`         | Reemplaza el QR               |
| `logo-1`     | Reemplaza el primer logo      |
| `logo-2`     | Reemplaza el segundo logo     |
| `logo-3`     | Reemplaza el tercer logo      |

---

### Ejemplo usando slots

```html
<poster-acoso>
  <img
    slot="hero-image"
    src="./assets/images/otra-imagen.png"
    alt="Nueva imagen"
  />
</poster-acoso>
```

---

# `<poster-aulas>`

Componente de señalización institucional.

---

## Atributos configurables

| Atributo  | Descripción           |
| --------- | --------------------- |
| `line-1`  | Primera línea         |
| `line-2`  | Segunda línea         |
| `line-3`  | Tercera línea         |
| `line-4`  | Cuarta línea          |
| `line-5a` | Quinta línea superior |
| `line-5b` | Quinta línea inferior |
| `footer`  | Texto inferior        |

---

## Ejemplo de uso

```html
<poster-aulas
  line-1="Aulas 1, 2, 3"
  line-2="Apoyo informático"
  line-3="Servidores"
  line-4="Lab 1 y 2"
  line-5a="Coordinación"
  line-5b="Informática Empresarial"
  footer="UCR"
></poster-aulas>
```

---

## Slots disponibles

| Slot     | Descripción                   |
| -------- | ----------------------------- |
| `footer` | Reemplaza el footer del panel |

---

# Variables CSS globales

Las variables CSS se encuentran en:

```txt
src/css/global.css
```

Estas variables atraviesan el Shadow DOM y permiten personalizar los componentes desde fuera.

---

## Variables configurables

```css
:root {
  --color-fondo-oscuro: #2b1a0f;
  --color-naranja: #f27a1a;
  --color-negro-gradiente: #1a0f0a;
  --color-azul-claro: #4aa3df;
  --color-blanco: white;
  --color-morado: #9b5fc0;
  --color-negro-qr: #000;
}
```

---

# Shadow DOM

Cada componente utiliza:

```js
this.attachShadow({ mode: "open" });
```

Esto permite:

- Encapsular estilos.
- Evitar conflictos CSS.
- Mantener independencia visual.
- Crear componentes reutilizables.

---

# Renderizado del componente

El HTML interno de cada componente se genera utilizando:

```js
this.shadowRoot.setHTMLUnsafe(...)
```

---

# Comunicación entre componente y HTML

La comunicación se realiza mediante atributos HTML.

Ejemplo:

```html
<poster-aulas line-1="Aulas 1, 2, 3"></poster-aulas>
```

Los componentes reaccionan automáticamente a cambios usando:

```js
static observedAttributes = [];
attributeChangedCallback() {}
```

---

# CSS Parts

Los componentes exponen partes estilables utilizando:

```html
part=""
```

Esto permite aplicar estilos externos con:

```css
poster-acoso::part(title-block) {
  border: 2px solid white;
}
```

# Ejemplo de cambios en consola

---

## Modificar contenido del componente `<poster-acoso>`

```js
const posterAcoso = document.querySelector("poster-acoso");

// Cambiar títulos
posterAcoso.setAttribute("title-1", "LA U");
posterAcoso.setAttribute("title-2", "TE");
posterAcoso.setAttribute("title-3", "ESCUCHA");

// Cambiar subtítulos
posterAcoso.setAttribute("subtitle-1", "El respeto siempre importa");

posterAcoso.setAttribute("subtitle-2", "DETENGAMOS EL ACOSO");

// Cambiar texto QR
posterAcoso.setAttribute("qr-label", "Escanea para recibir ayuda");

// Cambiar logos
posterAcoso.setAttribute("logo-1", "UCR");
posterAcoso.setAttribute("logo-2", "Bienestar Estudiantil");
posterAcoso.setAttribute("logo-3", "Sede Guanacaste");

// Cambiar imagen (la imagen si está en el proyecto)
posterAcoso.setAttribute("image-src", "./assets/images/otra-imagen.jpg");

posterAcoso.setAttribute("image-alt", "Nueva imagen institucional");
```

---

## Modificar contenido del componente `<poster-aulas>`

```js
const posterAulas = document.querySelector("poster-aulas");

// Cambiar líneas
posterAulas.setAttribute("line-1", "Biblioteca");
posterAulas.setAttribute("line-2", "Laboratorio");
posterAulas.setAttribute("line-3", "Sala Multimedia");
posterAulas.setAttribute("line-4", "Aula Virtual");

// Cambiar doble línea
posterAulas.setAttribute("line-5a", "Coordinación");
posterAulas.setAttribute("line-5b", "Ingeniería");

// Cambiar footer
posterAulas.setAttribute("footer", "UCR");
```

---

## Modificar variables CSS globales

```js
// Cambiar color naranja
document.documentElement.style.setProperty("--color-naranja", "#ff0000");

// Cambiar color morado
document.documentElement.style.setProperty("--color-morado", "#00ff88");

// Cambiar color azul
document.documentElement.style.setProperty("--color-azul-claro", "#0066ff");

// Cambiar fondo oscuro
document.documentElement.style.setProperty("--color-fondo-oscuro", "#111111");
```

---

## Acceder al Shadow DOM

```js
const shadowAcoso = document.querySelector("poster-acoso").shadowRoot;

console.log(shadowAcoso);

// Buscar elementos internos
console.log(shadowAcoso.querySelector(".titulo-1"));

// Modificar estilos internos
shadowAcoso.querySelector(".titulo-1").style.transform = "rotate(0deg)";
```

---

## Probar slots dinámicamente

```js
const poster = document.querySelector("poster-acoso");

const nuevoLogo = document.createElement("div");

nuevoLogo.setAttribute("slot", "logo-1");

nuevoLogo.textContent = "NUEVO LOGO";

nuevoLogo.style.background = "black";
nuevoLogo.style.color = "white";
nuevoLogo.style.padding = "10px";

poster.appendChild(nuevoLogo);
```
