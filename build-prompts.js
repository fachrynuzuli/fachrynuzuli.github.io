const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, 'content/prompts');
const outDir = path.join(__dirname, 'prompts');
const indexFile = path.join(__dirname, 'index.html');

// Create output directory if it doesn't exist
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Clear old html files
fs.readdirSync(outDir).forEach(file => {
    if (file.endsWith('.html')) {
        fs.unlinkSync(path.join(outDir, file));
    }
});

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const prompts = [];

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function cleanMaker(maker) {
    if (!maker) return null;
    return maker.toString().replace(/\[\[|\]\]/g, '');
}

files.forEach(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    
    const title = data.title || file.replace('.md', '');
    const slug = slugify(title);
    const category = data.category || 'uncategorized';
    const maker = cleanMaker(data.maker);
    const description = data.description || `Free prompt: ${title}. Part of Fachry Nuzuli's curated prompt collection.`;

    // Setup regex to remove duplicated titles from the body
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`^#{1,6}\\s+${escapedTitle}\\s*$`, 'gmi');
    const plainTitleRegex = new RegExp(`^[\\*_]*${escapedTitle}[\\*_]*\\s*$`, 'gmi');

    const cleanContent = content
        // Remove duplicated headings matching the title
        .replace(titleRegex, '')
        // Remove duplicated plain text matching the title
        .replace(plainTitleRegex, '')
        .trim();

    // Steph Ango styled HTML wrapper for PROMPTS
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Fachry Nuzuli</title>
  <meta name="description" content="${description}">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../assets/images/favicon-192.png">
  <link rel="apple-touch-icon" href="../assets/images/favicon-192.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/index.css">
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
  <div class="container">
    <a href="../index.html#prompts" class="nav-back">← back to prompts</a>
    <h2 class="article-title">${title}</h2>
    <div class="prompt-toolbar">
      <button class="copy-prompt-btn" id="copy-btn"
        onclick="navigator.clipboard.writeText(document.getElementById('prompt-raw').textContent); this.innerText='[ copied ]'; setTimeout(() => this.innerText='[ copy prompt ]', 2000);">[ copy prompt ]</button>
      <button class="view-toggle-btn" id="toggle-btn" onclick="toggleView()">[ raw ]</button>
    </div>

    <!-- Hidden raw text for copy -->
    <textarea id="prompt-raw" style="display:none;" readonly>${cleanContent}</textarea>

    <!-- Rendered markdown view -->
    <div id="prompt-rendered" class="prompt-rendered"></div>

    <!-- Raw pre view (hidden by default) -->
    <pre id="prompt-text" class="prompt-block" style="display:none;"></pre>

    ${maker ? `<div class="prompt-footer">Maker: ${maker}</div>` : ''}
  </div>

  <script>
    // Render markdown on load
    const rawEl = document.getElementById('prompt-raw');
    const renderedEl = document.getElementById('prompt-rendered');
    const rawBlockEl = document.getElementById('prompt-text');

    const rawText = rawEl.textContent;
    rawBlockEl.textContent = rawText;

    // Configure marked
    marked.setOptions({ breaks: true, gfm: true });
    renderedEl.innerHTML = marked.parse(rawText);

    let isRaw = false;
    function toggleView() {
      isRaw = !isRaw;
      const btn = document.getElementById('toggle-btn');
      if (isRaw) {
        renderedEl.style.display = 'none';
        rawBlockEl.style.display = 'block';
        btn.textContent = '[ rendered ]';
      } else {
        renderedEl.style.display = 'block';
        rawBlockEl.style.display = 'none';
        btn.textContent = '[ raw ]';
      }
    }
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
    
    prompts.push({
        title,
        slug,
        category
    });
});

// Group by category
const grouped = prompts.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
}, {});

// Generate HTML for list
let listHtml = '<!-- PROMPTS LIST START -->\n';
const categories = Object.keys(grouped).sort();

categories.forEach(cat => {
    listHtml += `        <div class="prompt-category">${cat}/</div>\n`;
    grouped[cat].sort((a, b) => a.title.localeCompare(b.title)).forEach(p => {
        listHtml += `        <div class="prompt-item"><a href="prompts/${p.slug}.html">${p.title}</a></div>\n`;
    });
    listHtml += `        <div style="margin-bottom: 28px;"></div>\n`;
});
listHtml += '        <!-- PROMPTS LIST END -->';

// Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(/<!-- PROMPTS LIST START -->[\s\S]*<!-- PROMPTS LIST END -->/, listHtml);
fs.writeFileSync(indexFile, indexContent);

console.log('Build complete. Generated ' + prompts.length + ' prompts.');
