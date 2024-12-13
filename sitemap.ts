export const generateSitemap = (
  baseUrl: string,
  routes: Array<{
    path: string;
    lastMod?: string;
    changeFreq?: string;
    priority?: number;
  }>
) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      ({ path, lastMod, changeFreq, priority }) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      ${lastMod ? `<lastmod>${lastMod}</lastmod>` : ''}
      ${changeFreq ? `<changefreq>${changeFreq}</changefreq>` : ''}
      ${priority ? `<priority>${priority}</priority>` : ''}
    </url>
  `
    )
    .join('')}
</urlset>`;

  return xml;
};