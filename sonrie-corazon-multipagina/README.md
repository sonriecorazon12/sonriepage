# Sonríe Corazón — sitio estático multipágina

Reconstrucción independiente en HTML, CSS y JavaScript. Cada sección funciona como una página separada y el proyecto se puede publicar directamente en GitHub Pages.

## Páginas

- `index.html` — Inicio
- `conocenos.html` — Historia e identidad
- `acciones.html` — Portafolio general
- `proyectos.html` — Proyectos educativos
- `conferencias.html` — Conferencias
- `talleres.html` — Talleres
- `responsabilidad-social.html` — Campañas sociales
- `voluntariado.html` — Roles y postulación
- `galeria.html` — Galería con filtros
- `donaciones.html` — Formas de aportar
- `contacto.html` — Contacto general
- `404.html` — Página de error

## Estructura

```text
sonrie-corazon-multipagina/
├── index.html
├── conocenos.html
├── acciones.html
├── proyectos.html
├── conferencias.html
├── talleres.html
├── responsabilidad-social.html
├── voluntariado.html
├── galeria.html
├── donaciones.html
├── contacto.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   └── images/README.md
├── .github/workflows/pages.yml
├── .nojekyll
├── LICENSE
└── README.md
```

## Ejecutar localmente

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio y copia todo el contenido de esta carpeta.
2. Haz `commit` y `push` a la rama `main`.
3. En GitHub abre **Settings → Pages**.
4. Selecciona **GitHub Actions** como fuente.
5. El workflow incluido publicará el sitio automáticamente.

## Personalización

- Diseño y colores: `assets/css/styles.css`
- Interacciones y formularios: `assets/js/script.js`
- Textos: cada archivo `.html`
- Correo receptor: busca `infosonriecorazon@gmail.com`
- Redes sociales: reemplaza los enlaces `href="#"` del footer

## Fotografías

La versión inicial utiliza URLs públicas del sitio de Wix. Para independizar el repositorio:

1. Descarga imágenes autorizadas.
2. Guárdalas en `assets/images/`.
3. Sustituye las URL remotas en los archivos HTML y en las variables `--hero-image`.

## Formularios

Los formularios validan campos y abren el cliente de correo mediante `mailto:`. Para envíos directos conecta Formspree, Netlify Forms, Google Apps Script o un backend propio.

## Derechos

El código se distribuye bajo licencia MIT. La marca, textos institucionales, fotografías y logotipo pertenecen a sus titulares y requieren autorización para redistribución o uso fuera del proyecto.

## Rediseño visual 2026

Esta versión utiliza una dirección visual más cercana al sitio original de Wix: navegación blanca, titulares grandes, composición fotográfica, bloques planos y colores institucionales. Cada página tiene un sistema propio para evitar que todas las secciones se perciban como una misma plantilla:

- **Conócenos:** diseño editorial dividido y cronología horizontal.
- **Acciones:** mosaico fotográfico asimétrico.
- **Proyectos:** dossier amarillo con proyectos en franjas diferenciadas.
- **Conferencias:** portada fotográfica y agenda editorial.
- **Talleres:** módulos de aprendizaje con colores suaves.
- **Responsabilidad social:** composición tipo collage y ciclo de campaña.
- **Voluntariado:** identidad coral y recorrido de incorporación.
- **Galería:** muro fotográfico minimalista.
- **Donaciones:** diseño centrado y orientado a confianza.
- **Contacto:** portada directa sin fotografía genérica.
