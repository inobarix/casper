# Landing B2B — Privacidad visual para vidrios corporativos

Landing page one-page construida con [Astro](https://astro.build), enfocada 100% en
captar leads B2B (formulario de contacto) para una solución de privacidad visual
sobre vidrios corporativos.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Esto levanta el servidor de desarrollo (por defecto en `http://localhost:4321`).

Otros comandos:

```bash
npm run build    # build de producción en /dist
npm run preview  # sirve el build de /dist localmente
```

## Estructura del proyecto

```
src/
  components/
    Header.astro            Nav sticky + menú mobile
    Hero.astro               Hero principal con doble CTA y mockup del efecto
    Problema.astro           El riesgo (visual hacking) + comparativa adentro/afuera
    Beneficios.astro         Grid de beneficios clave
    Casos.astro               Segmentos objetivo (bancos, legales, etc.)
    ComoFunciona.astro       Stepper del servicio (diagnóstico → instalación)
    FormularioContacto.astro CTA final + formulario de leads + FAQ
    WhatsappFloat.astro       Botón flotante de WhatsApp
    Footer.astro
  pages/
    index.astro               Ensambla todas las secciones + meta tags/SEO
  styles/
    global.css                Design tokens (:root) + reset + utilidades
```

## Placeholders a reemplazar antes de publicar

### Marca y contenido
| Placeholder | Dónde | Descripción |
|---|---|---|
| `[NOMBRE_MARCA]` | `Header.astro`, `Footer.astro`, `index.astro` (title/OG) | Nombre de la marca/empresa |
| `[EMAIL_CONTACTO]` | `Footer.astro` | Email de contacto público |
| `[UBICACION_EMPRESA]` | `Footer.astro` | Ciudad / dirección |
| `[WHATSAPP_NUMERO]` | `WhatsappFloat.astro`, `Footer.astro` | Número completo con código de país, sin espacios ni signos (ej: `5491122334455`) |
| `[WHATSAPP_NUMERO_VISIBLE]` | `Footer.astro` | Mismo número en formato legible para mostrar en el link |
| `[LOGO_CLIENTE_1..5]` | `Hero.astro` | Reemplazar por logos reales de clientes (franja de confianza) |

### Formulario de leads
| Placeholder | Dónde | Descripción |
|---|---|---|
| `[FORMSPREE_ENDPOINT]` | `FormularioContacto.astro` | Endpoint de Formspree, ej. `https://formspree.io/f/xxxxabcd`. Crear el form en [formspree.io](https://formspree.io) y pegar el ID |

Para usar **EmailJS** en vez de Formspree, el propio componente
`FormularioContacto.astro` trae, en un comentario al inicio del archivo, los
tres pasos y placeholders (`[EMAILJS_SERVICE_ID]`, `[EMAILJS_TEMPLATE_ID]`,
`[EMAILJS_PUBLIC_KEY]`) para reemplazar el bloque `fetch()` del `<script>`.

### Colores (design tokens)
Definidos como variables CSS en `src/styles/global.css`, dentro de `:root`:

| Variable | Uso | Default |
|---|---|---|
| `--color-primario` | Fondo oscuro (hero, footer, stepper) | `#0b1220` |
| `--color-secundario` | Texto secundario / grises | `#64748b` |
| `--color-acento` | Único color de CTA / foco de atención | `#22d3ee` |

Los defaults ya cumplen contraste AA. Si la marca tiene paleta propia,
reemplazar estos valores (y sus variantes `-600`, `-700`, `-800`, `-100`,
`-200`) manteniendo el contraste.

### Imágenes / SEO
| Placeholder | Dónde | Descripción |
|---|---|---|
| `[IMG_HERO]` | Comentario en `Hero.astro` | El hero usa una composición CSS/SVG por defecto; el comentario explica cómo reemplazarla por foto real con `<Image>` de `astro:assets` (recomendado 1200x900px) |
| `[IMG_ADENTRO]` / `[IMG_AFUERA]` | Comentario en `Problema.astro` | Ídem, comparativa adentro/afuera (recomendado 800x600px) |
| `[OG_IMAGE]` | `index.astro` | Imagen para Open Graph / redes sociales (recomendado 1200x630px), colocar en `/public/` |
| `[SITE_URL]` | `astro.config.mjs` (`site`), `index.astro` (canonical/OG) | Dominio final de publicación |
| `/public/favicon.svg` | — | Reemplazar por el isotipo real de la marca |

## Publicar (Netlify / Vercel)

Astro genera un sitio 100% estático (`output: "static"` por defecto), así que
cualquiera de las dos plataformas funciona sin configuración adicional:

**Netlify**
1. Conectar el repositorio.
2. Build command: `npm run build`
3. Publish directory: `dist`

**Vercel**
1. Importar el repositorio (Vercel detecta Astro automáticamente).
2. Build command: `astro build` — Output directory: `dist`

Antes de publicar: reemplazar todos los placeholders de la tabla anterior,
especialmente `[FORMSPREE_ENDPOINT]` y `[WHATSAPP_NUMERO]` (sin eso el
formulario y el botón de WhatsApp no funcionan), y `[SITE_URL]` en
`astro.config.mjs`.

## Notas de accesibilidad y performance

- Contraste AA verificado en textos sobre fondo oscuro y claro.
- Foco visible (`:focus-visible`) en todos los elementos interactivos.
- Formulario con `label` asociado a cada campo, errores inline con
  `role="alert"` y estado de envío con `aria-live="polite"`.
- FAQ implementada como acordeón accesible (`aria-expanded`, `aria-controls`,
  `role="region"`).
- `prefers-reduced-motion` respetado en reveal-on-scroll y animaciones.
- JS mínimo: menú mobile, acordeón FAQ, validación/envío del formulario y
  reveal-on-scroll — sin frameworks de UI ni JS del lado del cliente para el
  resto de la página (HTML estático generado por Astro).
