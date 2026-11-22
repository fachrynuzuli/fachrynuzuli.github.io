const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, 'content/notes');
const outDir = path.join(__dirname, 'notes');
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

function formatDateLong(dateStr) {
    const d = new Date(dateStr);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatDateShort(dateStr) {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

function estimateReadTime(text) {
    const words = text.replace(/[#*_`>\[\]()!-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 210));
}

function extractExcerpt(mdText) {
    const lines = mdText.split('\n');
    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;
        if (/^(#{1,6}\s|!\[|---|===|>\s*$|\*\s*$)/.test(line)) continue;
        const plain = line
            .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/[*_`~>#]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (plain.length >= 28) {
            return plain.length > 130 ? plain.slice(0, 127).trimEnd() + '...' : plain;
        }
    }
    return '';
}

const indonesianSlugs = new Set([
    'the-kamal-way-restart-karier-dalam-6-bulan',
    'the-intelligent-investor-akan-selalu-relevan',
    'karier-terancam-stuck-cara-survive',
    '5-pertanyaan',
    '2-tahun-setelah-pay-cut-57'
]);

const rankingData = {
    'the-kamal-way-restart-karier-dalam-6-bulan': { category: 'Career' },
    'the-intelligent-investor-akan-selalu-relevan': { category: 'Investing' },
    'karier-terancam-stuck-cara-survive': { category: 'Career' },
    '5-pertanyaan': { category: 'Product' },
    'the-knowledge-action-gap': { category: 'Mindset' },
    '2-tahun-setelah-pay-cut-57': { category: 'Career' },
    'procrastination-is-a-superpower': { category: 'Mindset' },
    'life-lesson-from-59-hours-bed-rest': { category: 'Mindset' },
    'niche-down-is-terrible-advice-for-smart-people-dan-koe': { category: 'Writing' },
    'supernova-and-entropy-from-a-fiction-book': { category: 'Mindset' }
};

const rankingOrder = Object.keys(rankingData);

// Pass 1: Parse all notes first so we can generate prev/next navigation cards
const notes = files.map(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);

    let title = data.title || file.replace('.md', '');
    if (!data.title) {
        const match = content.match(/^#\s+(.+)$/m);
        if (match && match[1].trim().toLowerCase() !== 'references') {
            title = match[1].trim();
        }
    }

    const slug = slugify(title);
    let created = new Date(data.created);
    if (isNaN(created.getTime())) {
        const dateMatch = content.match(/[\*_]*(\d{1,2}\s+[A-Za-z]+,\s+\d{4})[\*_]*/);
        if (dateMatch) {
            created = new Date(dateMatch[1]);
        } else {
            created = fs.statSync(path.join(contentDir, file)).birthtime;
        }
    }

    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`^#{1,6}\\s+${escapedTitle}\\s*$`, 'gmi');
    const plainTitleRegex = new RegExp(`^[\\*_]*${escapedTitle}[\\*_]*\\s*$`, 'gmi');

    const cleanContent = content
        .replace(titleRegex, '')
        .replace(plainTitleRegex, '')
        .replace(/^[\*_]*\d{1,2}\s+[A-Za-z]+,\s+\d{4}(?:\s+\d{2}:\d{2})?[\*_]*\s*$/gm, '')
        .replace(/^(?:Status|Tags):\s*.*$/gm, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

    const htmlContent = marked.parse(cleanContent);
    const sourceUrl = data.url || data.source || '';
    const sourceLabel = sourceUrl.includes('x.com') ? 'Read original on X' :
                        sourceUrl.includes('medium.com') ? 'Read original on Medium' :
                        sourceUrl.includes('substack.com') ? 'Read original on Substack' : 'Read original source';

    const isPost = data.categories?.includes('[[Posts]]') || data.tags?.includes('tweets') || sourceUrl.includes('x.com');
    const docLang = indonesianSlugs.has(slug) ? 'id' : 'en';
    const readMins = estimateReadTime(cleanContent);
    const excerpt = data.description || extractExcerpt(cleanContent);
    const category = (rankingData[slug] && rankingData[slug].category) || 'Essay';

    return {
        title,
        slug,
        lang: docLang,
        date: created,
        year: created.getFullYear(),
        month: (created.getMonth() + 1).toString().padStart(2, '0'),
        dateLong: formatDateLong(created),
        dateShort: formatDateShort(created),
        readMins,
        excerpt,
        category,
        sourceUrl,
        sourceLabel,
        isPost,
        htmlContent
    };
});

// Sort by curated rank order
notes.sort((a, b) => {
    const indexA = rankingOrder.indexOf(a.slug);
    const indexB = rankingOrder.indexOf(b.slug);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return b.date - a.date;
});

// Pass 2: Write refined Zara-inspired editorial reader pages with adjacent prev/next cards
notes.forEach((note, idx) => {
    const prevNote = idx > 0 ? notes[idx - 1] : null;
    const nextNote = idx < notes.length - 1 ? notes[idx + 1] : null;

    const navHtml = `
      <nav class="reader-nav" aria-label="More writings">
        ${prevNote ? `
        <a href="${prevNote.slug}.html" class="reader-next" data-reader-type="note" data-reader-slug="${prevNote.slug}">
          <span class="reader-next-k">← previous</span>
          <span class="reader-next-t"${prevNote.lang === 'id' ? ' lang="id"' : ''}>${escapeHtml(prevNote.title)}</span>
        </a>` : '<span></span>'}
        ${nextNote ? `
        <a href="${nextNote.slug}.html" class="reader-next reader-next-r" data-reader-type="note" data-reader-slug="${nextNote.slug}">
          <span class="reader-next-k">next →</span>
          <span class="reader-next-t"${nextNote.lang === 'id' ? ' lang="id"' : ''}>${escapeHtml(nextNote.title)}</span>
        </a>` : '<span></span>'}
      </nav>`;

    const html = `<!DOCTYPE html>
<html lang="${note.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(note.title)} | Fachry Nuzuli Kamal</title>
  <meta name="description" content="${escapeHtml(note.excerpt || note.title)}">
  <meta name="author" content="Fachry Nuzuli Kamal">
  <link rel="canonical" href="https://fachrynuzuli.com/notes/${note.slug}.html">
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
        <a href="../index.html#writings" class="is-active" aria-current="page">writings</a>
        <a href="../index.html#resources">resources</a>
        <a href="../index.html#connect">connect</a>
      </nav>
      <a href="../index.html" class="reader-top-close" aria-label="Back to Macintosh">×</a>
    </div>
  </header>

  <main class="reader-shell">
    <article class="reader-article" data-reader-kind="note">
      <a href="../index.html#writings" class="reader-back" data-reader-back="writings">← all writings</a>

      <header class="reader-head">
        <p class="reader-meta">
          <time datetime="${note.year}-${note.month}">${note.dateLong}</time>
          <span aria-hidden="true">·</span>
          <span>${note.readMins} min read</span>
          <span aria-hidden="true">·</span>
          <span class="reader-cat-pill">${escapeHtml(note.category)}</span>
        </p>
        <h1 class="reader-title">${escapeHtml(note.title)}</h1>
      </header>

      <div class="reader-prose ${note.isPost ? 'is-thread' : ''}">
${note.htmlContent}
      </div>

      <footer class="reader-foot">
        ${note.sourceUrl ? `
        <div class="reader-source-row">
          <a href="${escapeHtml(note.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="reader-source-link">
            ${escapeHtml(note.sourceLabel)} ↗
          </a>
        </div>` : ''}
        ${navHtml}
      </footer>
    </article>

    <div class="reader-shell-foot">
      <a href="../index.html" class="reader-back">← back to the mac</a>
    </div>
  </main>
</body>
</html>`;

    fs.writeFileSync(path.join(outDir, `${note.slug}.html`), html);
});

// Pass 3: Generate Zara-inspired 3-column editorial list for index.html
let listHtml = '<!-- NOTES LIST START -->\n';
listHtml += '      <ul class="writings-list">\n';
notes.forEach(note => {
    const langAttr = note.lang === 'id' ? ' lang="id"' : '';
    listHtml += '        <li class="wr-item">\n';
    listHtml += `          <a href="notes/${note.slug}.html" class="wr-row" data-reader-type="note" data-reader-slug="${note.slug}">\n`;
    listHtml += `            <span class="wr-date">${note.dateShort}</span>\n`;
    listHtml += '            <span class="wr-main">\n';
    listHtml += `              <span class="wr-title"${langAttr}>${escapeHtml(note.title)}</span>\n`;
    if (note.excerpt) {
        listHtml += `              <span class="wr-excerpt"${langAttr}>${escapeHtml(note.excerpt)}</span>\n`;
    }
    listHtml += '            </span>\n';
    listHtml += '            <span class="wr-side">\n';
    listHtml += `              <span class="wr-read">${note.readMins} min</span>\n`;
    listHtml += `              <span class="wr-pill">${escapeHtml(note.category)}</span>\n`;
    listHtml += '            </span>\n';
    listHtml += '          </a>\n';
    listHtml += '        </li>\n';
});
listHtml += '      </ul>\n';
listHtml += '      <!-- NOTES LIST END -->';

let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(/<!-- NOTES LIST START -->[\s\S]*<!-- NOTES LIST END -->/, listHtml);
fs.writeFileSync(indexFile, indexContent);

console.log('Build complete. Generated ' + notes.length + ' editorial notes.');
