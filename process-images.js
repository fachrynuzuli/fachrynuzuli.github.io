const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const notesDir = 'content/notes';
const imagesDir = 'assets/images/notes';

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, targetPath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(targetPath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', reject);
    });
}

async function processFiles() {
    const files = fs.readdirSync(notesDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
        const filePath = path.join(notesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        const imageRegex = /!\[([^\]]*)\]\((https?:\/\/[^\)]+)\)/g;
        let match;
        const replacements = [];
        
        while ((match = imageRegex.exec(content)) !== null) {
            const [fullMatch, alt, url] = match;
            const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 10);
            
            let ext = 'png';
            if (url.toLowerCase().includes('.jpg') || url.toLowerCase().includes('.jpeg')) ext = 'jpg';
            else if (url.toLowerCase().includes('.webp')) ext = 'webp';
            else if (url.toLowerCase().includes('.gif')) ext = 'gif';
            
            const filename = `${hash}.${ext}`;
            const targetPath = path.join(imagesDir, filename);
            const localUrl = `/assets/images/notes/${filename}`;
            
            try {
                if (!fs.existsSync(targetPath)) {
                    await downloadImage(url, targetPath);
                }
                replacements.push({ original: url, local: localUrl });
            } catch (err) {}
        }
        
        for (const replacement of replacements) {
            content = content.split(replacement.original).join(replacement.local);
        }
        
        fs.writeFileSync(filePath, content);
    }
}

processFiles().catch(console.error);
