const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'images');
const outFile = path.join(imagesDir, 'images.json');
const allowedExts = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);

function normalizeKey(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateManifest() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);
  const manifest = {};
  const collisions = {};

  files.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return;

    const ext = path.extname(file);
    if (!allowedExts.has(ext.toLowerCase())) return;

    const base = path.basename(file, ext);
    let key = normalizeKey(base);
    if (!key) return; // skip weird names

    // Handle collisions by appending a numeric suffix
    if (manifest[key]) {
      collisions[key] = collisions[key] || 1;
      collisions[key]++;
      const newKey = `${key}-${collisions[key]}`;
      manifest[newKey] = file;
      console.warn(`Collision detected for key '${key}', adding as '${newKey}' -> ${file}`);
    } else {
      manifest[key] = file;
    }
  });

  // Write JSON pretty
  fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`Generated manifest with ${Object.keys(manifest).length} entries: ${outFile}`);
}

// Run
try {
  generateManifest();
} catch (err) {
  console.error('Failed to generate images manifest:', err);
  process.exit(1);
}
