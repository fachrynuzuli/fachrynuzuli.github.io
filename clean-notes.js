const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const notesDir = 'content/notes';

const titleMap = {
    'procrastination-is-a-superpower.md': 'Procrastination is a Superpower',
    'bed-rest-and-gratitude.md': 'Bed Rest and Gratitude',
    'niche-down-story.md': 'Finding Your Niche: The Dan Koe Story',
    'supernova-entropy-fiction.md': 'Supernova and Entropy in Fiction',
    'knowledge-action-gap.md': 'Closing the Knowledge-Action Gap',
    'the-kamal-way.md': 'The Kamal Way: Restart Karier Dalam 6 Bulan',
    'the-intelligent-investor.md': 'The Intelligent Investor Akan Selalu Relevan',
    'karier-terancam-stuck.md': 'Karier Terancam Stuck: Cara Survive',
    '5-pertanyaan-high-performing-pm.md': '5 Pertanyaan High-Performing PM',
    '2-tahun-setelah-pay-cut.md': '2 Tahun Setelah Pay Cut 57%'
};

fs.readdirSync(notesDir).forEach(file => {
    if (!file.endsWith('.md')) return;
    
    const filePath = path.join(notesDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    
    if (titleMap[file]) {
        data.title = titleMap[file];
    }
    
    if (data.published) {
        data.created = data.published;
    }
    
    let cleanContent = content
        .replace(/^Post by @fachrynuzuli on X.*\n/gm, '')
        .replace(/^title: "Post by @fachrynuzuli on X".*\n/gm, '')
        .trim();
        
    const newContent = matter.stringify(cleanContent, data);
    fs.writeFileSync(filePath, newContent);
});
