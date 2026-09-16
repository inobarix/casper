import { defineConfig } from 'astro/config';

// [SITE_URL]: reemplazar por el dominio final antes de publicar (se usa para
// generar URLs absolutas de Open Graph / sitemap). Debe ser una URL válida,
// por eso el placeholder usa un dominio de ejemplo en vez de corchetes.
export default defineConfig({
  site: 'https://www.ejemplo-reemplazar.com',
  compressHTML: true,
});
