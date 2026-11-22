const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, 'content/prompts');
const outDir = path.join(__dirname, 'prompts');
const indexFile = path.join(__dirname, 'index.html');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

fs.readdirSync(outDir).forEach(file => {
    if (file.endsWith('.html')) {
        fs.unlinkSync(path.join(outDir, file));
    }
});

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, ch => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[ch]));
}

function cleanMaker(maker) {
    if (!maker) return null;
    return maker.toString().replace(/\[\[|\]\]/g, '');
}

function extractSummary(mdText, fallback) {
    const lines = mdText.split('\n');
    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;
        if (/^(#{1,6}\s|---|===|```|<\w+)/.test(line)) continue;
        const plain = line
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/[*_`~>#]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (plain.length >= 24) {
            return plain.length > 118 ? plain.slice(0, 115).trimEnd() + '...' : plain;
        }
    }
    return fallback;
}

// Pass 1: Parse and statically compile every prompt (zero client CDN dependency!)
const prompts = files.map(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);

    const title = data.title || file.replace('.md', '');
    const slug = slugify(title);
    const category = data.category || 'general';
    const maker = cleanMaker(data.maker);

    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`^#{1,6}\\s+${escapedTitle}\\s*$`, 'gmi');
    const plainTitleRegex = new RegExp(`^[\\*_]*${escapedTitle}[\\*_]*\\s*$`, 'gmi');

    const cleanContent = content
        .replace(titleRegex, '')
        .replace(plainTitleRegex, '')
        .trim();

    const renderedHtml = marked.parse(cleanContent, { breaks: true, gfm: true });
    const summary = data.description || extractSummary(cleanContent, `Structured ${category} prompt template.`);
    const wordCount = cleanContent.split(/\s+/).filter(Boolean).length;

    return {
        title,
        slug,
        category,
        maker,
        summary,
        wordCount,
        cleanContent,
        renderedHtml
    };
});

// Sort cleanly by category then title
prompts.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

// Pass 2: Write refined Zara-inspired editorial prompt reader pages (pre-rendered HTML + raw toggle)
prompts.forEach((p, idx) => {
    const prevP = idx > 0 ? prompts[idx - 1] : null;
    const nextP = idx < prompts.length - 1 ? prompts[idx + 1] : null;

    const navHtml = `
      <nav class="reader-nav" aria-label="More prompts">
        ${prevP ? `
        <a href="${prevP.slug}.html" class="reader-next" data-reader-type="prompt" data-reader-slug="${prevP.slug}">
          <span class="reader-next-k">← previous</span>
          <span class="reader-next-t">${escapeHtml(prevP.title)}</span>
        </a>` : '<span></span>'}
        ${nextP ? `
        <a href="${nextP.slug}.html" class="reader-next reader-next-r" data-reader-type="prompt" data-reader-slug="${nextP.slug}">
          <span class="reader-next-k">next →</span>
          <span class="reader-next-t">${escapeHtml(nextP.title)}</span>
        </a>` : '<span></span>'}
      </nav>`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(p.title)} | Fachry Nuzuli Kamal</title>
  <meta name="description" content="${escapeHtml(p.summary)}">
  <meta name="author" content="Fachry Nuzuli Kamal">
  <link rel="canonical" href="https://fachrynuzuli.com/prompts/${p.slug}.html">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../assets/images/favicon-192.png">
  <link rel="apple-touch-icon" href="../assets/images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/index.css?v=5">
</head>
<body class="reader-standalone">
  <header class="reader-topbar">
    <div class="reader-topbar-inner">
      <a href="../index.html" class="reader-brand">Fachry Nuzuli Kamal</a>
      <nav class="reader-top-tabs" aria-label="Site sections">
        <a href="../index.html#about">about</a>
        <a href="../index.html#journey">journey</a>
        <a href="../index.html#works">works</a>
        <a href="../index.html#writings">writings</a>
        <a href="../index.html#resources" class="is-active" aria-current="page">resources</a>
        <a href="../index.html#connect">connect</a>
      </nav>
      <a href="../index.html" class="reader-top-close" aria-label="Back to Macintosh">×</a>
    </div>
  </header>

  <main class="reader-shell">
    <article class="reader-article" data-reader-kind="prompt">
      <a href="../index.html#resources" class="reader-back" data-reader-back="resources">← all resources</a>

      <header class="reader-head">
        <p class="reader-meta">
          <span class="reader-cat-pill">${escapeHtml(p.category)}</span>
          <span aria-hidden="true">·</span>
          <span>${p.wordCount} words</span>
          ${p.maker ? `<span aria-hidden="true">·</span> <span>Credit: ${escapeHtml(p.maker)}</span>` : ''}
        </p>
        <h1 class="reader-title">${escapeHtml(p.title)}</h1>
      </header>

      <div class="prompt-toolbar">
        <button type="button" class="copy-prompt-btn" data-prompt-copy>Copy prompt</button>
        <button type="button" class="view-toggle-btn" data-prompt-toggle>View raw Markdown</button>
      </div>

      <textarea class="prompt-raw-source" aria-label="Prompt Markdown source" tabindex="-1" hidden readonly>${escapeHtml(p.cleanContent)}</textarea>

      <div class="reader-prose prompt-rendered-pane">
${p.renderedHtml}
      </div>

      <pre class="prompt-block prompt-raw-pane" hidden>${escapeHtml(p.cleanContent)}</pre>

      <footer class="reader-foot">
        ${navHtml}
      </footer>
    </article>

    <div class="reader-shell-foot">
      <a href="../index.html" class="reader-back">← back to the mac</a>
    </div>
  </main>

  <script>
    (() => {
      const root = document.querySelector('.reader-article');
      if (!root) return;
      const copyBtn = root.querySelector('[data-prompt-copy]');
      const toggleBtn = root.querySelector('[data-prompt-toggle]');
      const rawSource = root.querySelector('.prompt-raw-source');
      const renderedPane = root.querySelector('.prompt-rendered-pane');
      const rawPane = root.querySelector('.prompt-raw-pane');

      if (copyBtn && rawSource) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(rawSource.value);
            copyBtn.textContent = 'Copied to clipboard';
          } catch {
            copyBtn.textContent = 'Copy failed';
          }
          window.setTimeout(() => { copyBtn.textContent = 'Copy prompt'; }, 1800);
        });
      }

      if (toggleBtn && renderedPane && rawPane) {
        let showingRaw = false;
        toggleBtn.addEventListener('click', () => {
          showingRaw = !showingRaw;
          renderedPane.hidden = showingRaw;
          rawPane.hidden = !showingRaw;
          toggleBtn.textContent = showingRaw ? 'View formatted' : 'View raw Markdown';
        });
      }
    })();
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(outDir, `${p.slug}.html`), html);
});

// Pass 3: Generate refined editorial prompt list for index.html
let listHtml = '<!-- PROMPTS LIST START -->\n';
listHtml += '      <ul class="writings-list prompts-editorial-list">\n';
prompts.forEach(p => {
    listHtml += '        <li class="wr-item">\n';
    listHtml += `          <a href="prompts/${p.slug}.html" class="wr-row" data-reader-type="prompt" data-reader-slug="${p.slug}">\n`;
    listHtml += `            <span class="wr-date">${escapeHtml(p.category)}</span>\n`;
    listHtml += '            <span class="wr-main">\n';
    listHtml += `              <span class="wr-title">${escapeHtml(p.title)}</span>\n`;
    listHtml += `              <span class="wr-excerpt">${escapeHtml(p.summary)}</span>\n`;
    listHtml += '            </span>\n';
    listHtml += '            <span class="wr-side">\n';
    listHtml += `              <span class="wr-read">${p.wordCount}w</span>\n`;
    listHtml += '              <span class="wr-pill">prompt</span>\n';
    listHtml += '            </span>\n';
    listHtml += '          </a>\n';
    listHtml += '        </li>\n';
});
listHtml += '      </ul>\n';
listHtml += '      <!-- PROMPTS LIST END -->';

let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(/<!-- PROMPTS LIST START -->[\s\S]*<!-- PROMPTS LIST END -->/, listHtml);
fs.writeFileSync(indexFile, indexContent);

console.log('Build complete. Generated ' + prompts.length + ' editorial prompts.');
