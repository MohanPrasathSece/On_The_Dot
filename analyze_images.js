
const fs = require('fs');
const path = require('path');

const featureDataPath = path.join(process.cwd(), 'src/data/featureData.tsx');
const content = fs.readFileSync(featureDataPath, 'utf8');

const imageRegex = /image:\s*["']([^"']+)["']/g;
let match;
const usages = {};
let totalSlots = 0;

while ((match = imageRegex.exec(content)) !== null) {
    const img = match[1];
    usages[img] = (usages[img] || 0) + 1;
    totalSlots++;
}

console.log(`Total image slots: ${totalSlots}`);
console.log('Duplicate usage:');
Object.entries(usages).forEach(([img, count]) => {
    if (count > 1) {
        console.log(`${img}: ${count}`);
    }
});

const availableImages = fs.readdirSync(path.join(process.cwd(), 'public/images'));
console.log(`\nAvailable images in public/images: ${availableImages.length}`);
