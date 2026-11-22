const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const PUBLIC_FILES = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'llms-full.txt',
  '_headers',
];

const PUBLIC_DIRS = [
  'assets',
  'notes',
  'prompts',
  'challenge-juni',
];

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

for (const file of PUBLIC_FILES) {
  const src = path.join(ROOT, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, file));
  }
}

for (const dir of PUBLIC_DIRS) {
  const src = path.join(ROOT, dir);
  if (fs.existsSync(src)) {
    fs.cpSync(src, path.join(DIST, dir), {
      recursive: true,
      filter: (p) => path.basename(p) !== '.DS_Store',
    });
  }
}

console.log(`Built Cloudflare dist/ with ${PUBLIC_FILES.length} root files and ${PUBLIC_DIRS.length} asset directories.`);
