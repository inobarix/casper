import { defineConfig } from 'astro/config';

// Dominio final del sitio: se usa para las URLs absolutas de canonical,
// Open Graph, sitemap.xml y robots.txt.
export default defineConfig({
  site: 'https://invision.com.ar',
  compressHTML: true,
});
