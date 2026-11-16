# Sonríe Corazón · Web actualizada 2026

Sitio institucional estático, preparado para sonriecorazon.org. No requiere Node, npm ni compilación. Incluye 14 páginas HTML, estilos, JavaScript, fuentes Poppins, fotografías locales y el video de Soñando Libros (sesión 3).

## Revisar en tu computadora

Descomprime el ZIP. Dentro de la carpeta `sonriepage-main`, ejecuta `python -m http.server 8000` y abre http://localhost:8000. También puedes abrir index.html directamente; se recomienda el servidor local para una revisión completa.

## Actualizar tu repositorio desde el navegador

1. Descomprime el ZIP en una carpeta de tu computadora. No subas el ZIP como un único archivo: GitHub no lo descomprime para publicar la web.
2. En la raíz del repositorio, usa **Add file → Upload files** y arrastra los archivos extraídos y la carpeta `assets`. `index.html` y `assets` deben estar al mismo nivel en la raíz. No arrastres la carpeta contenedora.
3. Confirma los cambios con **Commit changes**.
4. En **Settings → Pages**, usa **Deploy from a branch**, selecciona tu rama principal (`main`, o la que ya utilices), la carpeta **/(root)** y guarda. Si ya tienes Pages configurado de esta manera, conserva esa configuración.
5. Mantén `CNAME` con `sonriecorazon.org` y tu configuración DNS actual.

Comprobación de estructura correcta: al entrar al repositorio deben verse directamente `index.html`, `assets/` y `CNAME`. Si solo aparece un ZIP o una carpeta `sonriepage-main`, falta mover o cargar el contenido en la raíz.

Todos los archivos de este paquete pesan menos de 25 MiB y el video está optimizado para cargarlo desde el navegador. No se necesita un flujo de Actions personalizado. Este paquete no ha publicado cambios en producción.

## Editar el contenido

- Páginas: archivos HTML en la raíz.
- Diseño y colores: `assets/css/styles.css`.
- Menú, galería y formularios: `assets/js/script.js`.
- Fotografías: `assets/images/`.
- Video: `assets/videos/sonando-libros-sesion3.mp4`.
- Fuentes: `assets/fonts/` (Poppins Regular y SemiBold).
- SEO: títulos y descripciones de cada HTML, `sitemap.xml` y `robots.txt`.

Los formularios preparan un correo en la aplicación de correo del visitante. No tienen servidor de recepción ni guardan los datos. Correo y WhatsApp también se ofrecen como enlaces directos.

La galería tiene filtros y ampliación de imágenes. El video se reproduce a petición del visitante, sin reproducción automática. El diseño adapta columnas y navegación a pantallas pequeñas y respeta la preferencia de movimiento reducido.

Consulta `ACTUALIZACION_2026.md` para el alcance, fuentes y criterios editoriales. La licencia de código original se conserva en `LICENSE`; las fotografías, video y marca corresponden a sus respectivos titulares.
