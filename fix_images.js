const fs = require('fs');
const path = require('path');

const projectDir = 'c:\\Users\\admin\\Desktop\\mumbai-metropolitan\\src';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk(projectDir);

let counter = 1;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Match any images.unsplash.com URL
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[^"\s]*)?/g;
    
    const newContent = content.replace(regex, (match) => {
        const replacement = `https://picsum.photos/seed/mmr${counter++}/1200/800`;
        return replacement;
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log(`Updated with Picsum: ${file}`);
    }
});
