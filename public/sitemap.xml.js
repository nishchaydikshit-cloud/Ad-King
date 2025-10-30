const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://ad-king.vercel.app/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
`

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}
