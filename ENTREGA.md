# Zarocer — entrega de la primera versión

**Estado: construida y revisada localmente; publicación pendiente de autorización por rechazo automático.**

Vista local: http://127.0.0.1:43170/es/ · inglés: http://127.0.0.1:43170/

1. **Concepto visual.** «Señal en la oscuridad»: grafito, luz ámbar, blanco cálido, tipografía monumental y composición editorial. Se consideraron una interfaz de consola, un archivo editorial y una pieza escultórica; se eligió la última para dar identidad sin inventar material de juegos.
2. **Stack.** Generador estático TypeScript ejecutado por Node 24, HTML semántico, CSS y JavaScript progresivo. Sin React, hidratación, WebGL ni dependencias de producción. El despliegue usa Node 24, [compatible con Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions). El build remoto no necesita instalar paquetes; las herramientas de calidad se usan localmente.
3. **Arquitectura.** Proyecto independiente `zarocer-com`, separado de los portales. 56 páginas: 28 por idioma. Datos de proyectos tipados, plantillas bilingües, assets locales y salida estática `dist`. Los diez proyectos tienen rutas de juego y prensa preparadas.
4. **Home.** Hero con Zarocer, nombre completo secundario y «Games. Systems. Worlds of my own.» / «Juegos. Sistemas. Mundos propios.». Proyectos seleccionados, áreas de trabajo, portales, presentación y acceso a prensa/contacto.
5. **Games.** Diez títulos originales suministrados. Fichas premium con estudios tipográficos expresamente identificados. No se inventaron géneros, plataformas, estados, fechas, gameplay ni botones Play.
6. **About.** Presentación personal breve: Zarocer es Felipe Antonio Toledo Alcalde, desarrollador independiente de videojuegos. Sin empresa inventada, credenciales, ubicación o logros no documentados.
7. **Portfolio.** Proyectos originales, portales web, sistemas y experimentos. Los detalles técnicos y builds verificables quedan pendientes porque no se proporcionó evidencia. No se presenta la stack de esta web como experiencia previa.
8. **Press.** Datos del creador, biografía breve y extendida, copia de biografía, SVG del nombre/símbolo, imagen del creador y ZIP bilingüe. Arquitectura por juego preparada, con materiales pendientes. Estas fichas incompletas están fuera del sitemap y llevan `noindex`.
9. **Contact.** Interfaz de publicación, prensa y soporte. Se informa claramente que los canales todavía no están disponibles. No hay correo privado, email inventado ni formulario que simule enviar. Pasos exactos de activación en README.
10. **EN/ES.** Inglés en `/`, español en `/es/`. Selector conserva la página equivalente. Idioma HTML, canonical y alternates EN/ES/x-default por ruta.
11. **Responsive.** Home auditada a 320, 360, 375, 390, 414, 430, 1366×768, 1440×900 y 1920×1080: sin overflow horizontal. Además, 36 rutas principales, legales y de juegos auditadas a 320 px en ambos idiomas. Capturas reales revisadas de home móvil/escritorio, índice de juegos y prensa móvil.
12. **Animaciones.** Desplazamiento mínimo de imagen con puntero fino, reveal progresivo y elevación breve de cards. Navegación nativa, cursor normal, sin audio. Reglas `prefers-reduced-motion` y cambio de preferencia implementados; se verificó su código, sin cambiar la preferencia de accesibilidad del equipo.
13. **Performance.** Hero WebP: 58.680 bytes. JavaScript de cliente: 2.478 bytes. Fuente variable local, sin terceros durante la visita, sin hidratación ni backend. Son medidas de tamaño locales; Core Web Vitals y rendimiento de red en producción aún requieren el sitio publicado.
14. **SEO.** Enfoque en creador y títulos originales. Metadatos únicos, canonical, hreflang, robots y sitemap con 32 URLs. Borradores legales y kits de juegos vacíos no indexados. Sin duplicar el catálogo de los portales.
15. **Structured data.** Person con nombre completo y alternateName Zarocer, WebSite, WebPage, ProfilePage en About y BreadcrumbList en interiores. JSON parseado en todas las páginas. VideoGame pendiente de evidencia jugable y datos verificados; Article pendiente de noticias reales. Sin ratings, premios ni cifras inventadas.
16. **Open Graph.** Home, creador, índice de juegos y diez imágenes de título individual: 13 tarjetas PNG de 1200×630. Título, descripción, URL e imagen por página; X/Twitter card. Son identidad y tipografía, no capturas de juego.
17. **Repositorio.** Git local independiente en `zarocer-com`. GitHub preparado para `Zarocer-bit/zarocer-com`; el remoto aún no se creó porque la revisión automática bloqueó transmitir el nombre completo en el formulario.
18. **Commit.** La implementación y los informes se guardan en un commit local. Su identificador se incluye en la respuesta de entrega. No se realizó push.
19. **Vercel.** Sesión de navegador disponible; CLI sin credenciales. Configuración `vercel.json` preparada para un proyecto independiente, salida estática y cabeceras de seguridad. No se creó ni desplegó el proyecto remoto todavía.
20. **Dominio.** `zarocer.com` es el dominio de los canonical y compartir. DNS sin cambios. Conectar únicamente después de crear Vercel y verificar preview, como exige el encargo.
21. **URLs públicas.** No hay una nueva URL pública publicada. Las direcciones anteriores son vistas locales en este equipo. Los portales existentes se enlazan como proyectos secundarios, sin modificaciones.
22. **QA realizado.** Instalación reproducible, lint, TypeScript, build y auditoría estática aprobados. 56 páginas, 1.276 enlaces/recursos internos comprobados, 32 URLs de sitemap y cero fallos de esa auditoría. Consola de navegador sin errores/advertencias capturados. Menú, Escape con retorno de foco, cambio ES/EN, navegación juego/prensa y copia de biografía probados. PDF/ZIP y SVG existen; archivo ZIP creado y contenido comprobado en preparación. Falta probar HTTPS, cabeceras y producción tras desplegar. No se afirma un Lighthouse ni una certificación WCAG que no se hayan realizado.
23. **Acción humana pendiente.** Autorizar expresamente la publicación de «Felipe Antonio Toledo Alcalde» en GitHub y en la web/Vercel, debido al rechazo automático. Después se puede crear remoto, push, Vercel, verificar preview y preparar dominio. Contacto requiere definir canales reales; juegos requieren confirmar estados, plataformas y materiales. Borradores legales requieren revisión del creador antes de sustituirse por avisos definitivos.

## Identidad visual original

Imagen creada con la herramienta integrada de imagegen y guardada optimizada en `public/assets/signal.webp`. Prompt: composición horizontal oscura con espacio negativo a la izquierda; un bucle irregular de grafito fracturado a la derecha; luz fina ámbar/blanca en la grieta interior, rim light duro y grano fino. Sin texto, logos, personajes, partículas, morado ni gameplay. La copia original está en el almacenamiento de imágenes generadas; la web utiliza exclusivamente la versión local dentro del proyecto.

## Restricciones respetadas

`sources/` permanece intacto. No se modificaron los repositorios, DNS, Vercel, Search Console ni Analytics de los dos portales. No se publicó correo privado, perfil social inventado, estado Released no probado o experiencia técnica no documentada.
