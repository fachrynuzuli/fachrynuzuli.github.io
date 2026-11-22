const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'gh-pages-redirect');
const TARGET_ORIGIN = 'https://fachrynuzuli.com';

const DESCRIPTION =
  'Fachry Nuzuli Kamal is a product builder in Riau, Indonesia teaching non-technical people how to build in this economy. Sr Product Manager (Digital Transformation Lead), APRIL Group, Transport Division, and author of In This Economy.';

function redirectPage({ title, targetPath, preservePath = false }) {
  const fullTarget = `${TARGET_ORIGIN}${targetPath}`;
  const jsRedirect = preservePath
    ? `window.location.replace(${JSON.stringify(TARGET_ORIGIN)} + window.location.pathname + window.location.search + window.location.hash);`
    : `window.location.replace(${JSON.stringify(fullTarget)} + window.location.search + window.location.hash);`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${DESCRIPTION}">
  <link rel="canonical" href="${fullTarget}">
  <meta http-equiv="refresh" content="0; url=${fullTarget}">
  <script>${jsRedirect}</script>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #1e273d; color: #f4efe6; display: grid; place-items: center; min-height: 100dvh; margin: 0; padding: 1.5rem; text-align: center; }
    a { color: #f0ab57; }
  </style>
</head>
<body>
  <main>
    <p>Moved permanently to <a href="${fullTarget}">${fullTarget}</a>.</p>
  </main>
</body>
</html>
`;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// 1. Root redirect (preserves #hash like #about, #writings, #connect)
fs.writeFileSync(
  path.join(OUT, 'index.html'),
  redirectPage({ title: 'Fachry Nuzuli Kamal | Product Builder', targetPath: '/' })
);

// 2. Catch-all 404 redirect (preserves any indexed subpath)
fs.writeFileSync(
  path.join(OUT, '404.html'),
  redirectPage({ title: 'Redirecting to fachrynuzuli.com', targetPath: '/', preservePath: true })
);

// 3. Individual redirects for every indexed note & prompt HTML URL
for (const dir of ['notes', 'prompts']) {
  const srcDir = path.join(ROOT, dir);
  const dstDir = path.join(OUT, dir);
  if (!fs.existsSync(srcDir)) continue;
  fs.mkdirSync(dstDir, { recursive: true });

  for (const file of fs.readdirSync(srcDir)) {
    if (!file.endsWith('.html')) continue;
    const slug = file.replace(/\.html$/, '');
    fs.writeFileSync(
      path.join(dstDir, file),
      redirectPage({
        title: 'Fachry Nuzuli Kamal | Redirecting to fachrynuzuli.com',
        targetPath: `/${dir}/${slug}`,
      })
    );
  }
}

// 4. Plain-text AI crawler pointers to the canonical domain
fs.writeFileSync(
  path.join(OUT, 'llms.txt'),
  `# Fachry Nuzuli Kamal\n\nThis site has moved permanently to https://fachrynuzuli.com/\n\n- Canonical AI summary: https://fachrynuzuli.com/llms.txt\n- Complete AI dossier: https://fachrynuzuli.com/llms-full.txt\n`
);

fs.writeFileSync(
  path.join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: https://fachrynuzuli.com/sitemap.xml\n`
);

console.log('Built GitHub Pages redirect bundle in gh-pages-redirect/');
