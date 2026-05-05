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
    
    // Extract title
    let title = file.replace('.md', '');
    let cleanContent = content;
    
    // Try to find first H1 and remove it, but only use it as title if it's not "References"
    const match = content.match(/^#\s+(.+)$/m);
    if (match) {
        if (match[1].trim().toLowerCase() !== 'references') {
            title = match[1].trim();
        }
        // Always remove the first H1 if it matches the title to avoid duplication
        if (match[1].trim() === title) {
            cleanContent = content.replace(/^#\s+(.+)$/m, '').trim();
        }
    }
    
    const slug = slugify(title);
    let created = new Date(data.created);
    if (isNaN(created.getTime())) {
        // Try parsing from the markdown content (e.g. _11 Jun, 2024_ or 04 Sep, 2024)
        const dateMatch = content.match(/_?(\d{1,2}\s+[A-Za-z]+,\s+\d{4})_?/);
        if (dateMatch) {
            created = new Date(dateMatch[1]);
        } else {
            created = fs.statSync(path.join(contentDir, file)).birthtime;
        }
    }
    
    // Clean up Obsidian metadata
    cleanContent = cleanContent
        // Remove loose dates (e.g. "04 Sep, 2024", "19 Jul, 2024 12:14", "_11 Jun, 2024_")
        .replace(/^_?\d{1,2}\s+[A-Za-z]+,\s+\d{4}(?:\s+\d{2}:\d{2})?_?\s*$/gm, '')
        // Remove lines starting with Status: or Tags:
        .replace(/^(?:Status|Tags):\s*.*$/gm, '')
        // Clean up multiple empty lines
        .replace(/\n{3,}/g, '\n\n')
        .trim();
        
    // Parse markdown
    const htmlContent = marked.parse(cleanContent);
    
    // Steph Ango styled HTML wrapper
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Fachry Nuzuli</title>
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../assets/images/favicon-192.png">
  <link rel="apple-touch-icon" href="../assets/images/favicon-192.png">
  <link rel="stylesheet" href="../assets/css/index.css">
</head>
<body>
  <div class="container">
    <a href="../index.html#notes" class="nav-back">← back to notes</a>
    <h1 class="article-title">${title}</h1>
    <div class="article-meta">${formatDate(created)}</div>
    <div class="article-content">
${htmlContent}
    </div>
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

// Sort descending
notes.sort((a, b) => b.date - a.date);

// Group by year
const grouped = notes.reduce((acc, note) => {
    if (!acc[note.year]) acc[note.year] = [];
    acc[note.year].push(note);
    return acc;
}, {});

// Generate HTML for list
let listHtml = '<!-- NOTES LIST START -->\n';
for (const year of Object.keys(grouped).sort().reverse()) {
    listHtml += `      <div class="notes-group">\n`;
    listHtml += `        <div class="year-group-title">${year}</div>\n`;
    grouped[year].forEach(note => {
        listHtml += `        <div class="note-item">\n`;
        listHtml += `          <time class="note-date" datetime="${note.year}-${note.month}-${note.day}">${note.month}/${note.day}</time>\n`;
        listHtml += `          <span class="note-title"><a href="notes/${note.slug}.html">${note.title}</a></span>\n`;
        listHtml += `        </div>\n`;
    });
    listHtml += `      </div>\n`;
}
listHtml += '      <!-- NOTES LIST END -->';

// Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(/<!-- NOTES LIST START -->[\s\S]*<!-- NOTES LIST END -->/, listHtml);
fs.writeFileSync(indexFile, indexContent);

console.log('Build complete. Generated ' + notes.length + ' notes.');
