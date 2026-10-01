// Sitemap generado en build. Las URLs absolutas salen de `site` en
// astro.config.mjs, así que basta con configurar ahí el dominio final.
import type { APIRoute } from 'astro';

const RUTAS = ['/'];

export const GET: APIRoute = ({ site }) => {
  const hoy = new Date().toISOString().split('T')[0];
  const urls = RUTAS.map(
    (ruta) => `  <url>
    <loc>${new URL(ruta, site).href}</loc>
    <lastmod>${hoy}</lastmod>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
