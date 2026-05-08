const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, 'content/notes');
const outDir = path.join(__dirname, 'notes');
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
const notes = [];

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[d.getMonth()]} ${d.getDate().toString().padStart(2, '0')}, ${d.getFullYear()}`;
}

files.forEach(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const { data, content } = matter(raw);
    
    // Prefer title from frontmatter if available, otherwise look for H1 in content
    let title = data.title || file.replace('.md', '');
    let cleanContent = content;
    
    if (!data.title) {
        const match = content.match(/^#\s+(.+)$/m);
        if (match && match[1].trim().toLowerCase() !== 'references') {
            title = match[1].trim();
        }
    }
    
    const slug = slugify(title);
    let created = new Date(data.created);
    if (isNaN(created.getTime())) {
        // Try parsing from the markdown content (e.g. _11 Jun, 2024_, 04 Sep, 2024, or *02 Sep, 2024*)
        const dateMatch = content.match(/[\*_]*(\d{1,2}\s+[A-Za-z]+,\s+\d{4})[\*_]*/);
        if (dateMatch) {
            created = new Date(dateMatch[1]);
        } else {
            created = fs.statSync(path.join(contentDir, file)).birthtime;
        }
    }
    
    // Setup regex to remove duplicated titles from the body
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`^#{1,6}\\s+${escapedTitle}\\s*$`, 'gmi');
    const plainTitleRegex = new RegExp(`^[\\*_]*${escapedTitle}[\\*_]*\\s*$`, 'gmi');
    
    // Clean up Obsidian metadata and duplicate titles
    cleanContent = cleanContent
        // Remove duplicated headings matching the title
        .replace(titleRegex, '')
        // Remove duplicated plain text matching the title
        .replace(plainTitleRegex, '')
        // Remove loose dates (e.g. "04 Sep, 2024", "19 Jul, 2024 12:14", "*02 Sep, 2024*")
        .replace(/^[\*_]*\d{1,2}\s+[A-Za-z]+,\s+\d{4}(?:\s+\d{2}:\d{2})?[\*_]*\s*$/gm, '')
        // Remove lines starting with Status: or Tags:
        .replace(/^(?:Status|Tags):\s*.*$/gm, '')
        // Clean up multiple empty lines
        .replace(/\n{3,}/g, '\n\n')
        .trim();
        
    // Parse markdown
    const htmlContent = marked.parse(cleanContent);
    
    const sourceUrl = data.url || data.source || '';
    const sourceLabel = sourceUrl.includes('x.com') ? 'View on X' : 
                        sourceUrl.includes('medium.com') ? 'Read on Medium' :
                        sourceUrl.includes('substack.com') ? 'Read on Substack' : 'View Original Source';

    const isPost = data.categories?.includes('[[Posts]]') || data.tags?.includes('tweets') || sourceUrl.includes('x.com');

    // Synthesis-style HTML wrapper
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Synthesis</title>
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../assets/images/favicon-192.png">
  <link rel="apple-touch-icon" href="../assets/images/favicon-192.png">
  <link rel="stylesheet" href="../assets/css/index.css">
</head>
<body>
  <div class="container">
    <header class="article-header">
      <a href="../index.html#notes" class="nav-back">← back to index</a>
      <h1 class="article-title">${title}</h1>
      <div class="article-meta">
        <span>Published ${formatDate(created)}</span>
        ${sourceUrl ? `<span class="meta-separator">•</span> <a href="${sourceUrl}" target="_blank" class="source-meta-link">${sourceLabel}</a>` : ''}
      </div>
    </header>
    
    <div class="article-content ${isPost ? 'is-thread' : ''}">
${htmlContent}
    </div>

    ${sourceUrl ? `
    <footer class="article-footer">
      <div class="footer-line"></div>
      <div class="read-more-container">
        <p class="read-more-text">This is a synthesized version of the original writing.</p>
        <a href="${sourceUrl}" target="_blank" class="read-more-btn">
          ${sourceLabel} <span class="btn-arrow">→</span>
        </a>
      </div>
    </footer>` : ''}
  </div>
</body>
</html>`;

    fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
    
    notes.push({
        title,
        slug,
        date: created,
        year: created.getFullYear(),
        month: (created.getMonth() + 1).toString().padStart(2, '0'),
        day: created.getDate().toString().padStart(2, '0')
    });
});

// Sort by rank according to the analysis document
const rankingData = {
    'the-kamal-way-restart-karier-dalam-6-bulan': { score: '90%', tier: 'S', category: 'Career' },
    'the-intelligent-investor-akan-selalu-relevan': { score: '88%', tier: 'A', category: 'Investing' },
    'karier-terancam-stuck-cara-survive': { score: '88%', tier: 'A', category: 'Career' },
    '5-pertanyaan': { score: '84%', tier: 'A', category: 'Product' },
    'the-knowledge-action-gap': { score: '80%', tier: 'A', category: 'Mindset' },
    '2-tahun-setelah-pay-cut-57': { score: '80%', tier: 'A', category: 'Career' },
    'procrastination-is-a-superpower': { score: '80%', tier: 'A', category: 'Mindset' },
    'life-lesson-from-59-hours-bed-rest': { score: '80%', tier: 'A', category: 'Mindset' },
    'niche-down-is-terrible-advice-for-smart-people-dan-koe': { score: '78%', tier: 'B', category: 'Writing' },
    'supernova-and-entropy-from-a-fiction-book': { score: '78%', tier: 'B', category: 'Mindset' }
};

const rankingOrder = Object.keys(rankingData);

notes.sort((a, b) => {
    let indexA = rankingOrder.indexOf(a.slug);
    let indexB = rankingOrder.indexOf(b.slug);
    
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return b.date - a.date;
});

// Generate HTML for list
let listHtml = '<!-- NOTES LIST START -->\n';
listHtml += `      <div class="notes-ranked-list">\n`;
listHtml += `        <div class="note-item list-header">\n`;
listHtml += `          <div class="note-col note-col-rank">#</div>\n`;
listHtml += `          <div class="note-col note-col-title">Title</div>\n`;
listHtml += `          <div class="note-col note-col-category">Category</div>\n`;
listHtml += `          <div class="note-col note-col-date">Date</div>\n`;
listHtml += `        </div>\n`;
notes.forEach((note, index) => {
    const displayRank = (index + 1).toString().padStart(2, '0');
    const meta = rankingData[note.slug] || { score: '-', tier: '-', category: 'Other' };
    
    listHtml += `        <div class="note-item">\n`;
    listHtml += `          <div class="note-col note-col-rank">${displayRank}</div>\n`;
    listHtml += `          <div class="note-col note-col-title"><a href="notes/${note.slug}.html">${note.title}</a></div>\n`;
    listHtml += `          <div class="note-col note-col-category">${meta.category}</div>\n`;
    listHtml += `          <div class="note-col note-col-date">${note.year}-${note.month}</div>\n`;
    listHtml += `        </div>\n`;
});
listHtml += `      </div>\n`;
listHtml += '      <!-- NOTES LIST END -->';

// Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(/<!-- NOTES LIST START -->[\s\S]*<!-- NOTES LIST END -->/, listHtml);
fs.writeFileSync(indexFile, indexContent);

console.log('Build complete. Generated ' + notes.length + ' notes.');
