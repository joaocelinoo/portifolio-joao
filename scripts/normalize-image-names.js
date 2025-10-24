const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'images');
const allowedExts = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function run() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);
  const renames = [];

  files.forEach(file => {
    const full = path.join(imagesDir, file);
    const stat = fs.statSync(full);
    if (!stat.isFile()) return;

    const ext = path.extname(file);
    if (!allowedExts.has(ext.toLowerCase())) return;

    const base = path.basename(file, ext);
    const normalizedBase = normalizeName(base);
    if (!normalizedBase) return;

    const targetName = `${normalizedBase}${ext.toLowerCase()}`;
    const targetPath = path.join(imagesDir, targetName);

    // If filenames already match exactly, skip
    if (file === targetName) return;

    // If target exists and is the same file (case-only difference) we need a two-step rename
    const exists = fs.existsSync(targetPath);

    if (!exists) {
      // Attempt to rename (handles case-only by doing a temp rename if needed on Windows)
      try {
        // On Windows, renaming case-only sometimes does nothing; use a temp intermediate name
        const tempPath = path.join(imagesDir, `${targetName}.tmp-rename`);
        fs.renameSync(full, tempPath);
        fs.renameSync(tempPath, targetPath);
        renames.push({ from: file, to: targetName });
      } catch (err) {
        // fallback: try direct rename
        try {
          fs.renameSync(full, targetPath);
          renames.push({ from: file, to: targetName });
        } catch (err2) {
          console.error(`Failed to rename ${file} -> ${targetName}:`, err2.message);
        }
      }
    } else {
      // target exists, avoid overwriting: append suffix number
      let i = 2;
      let newName;
      do {
        newName = `${normalizedBase}-${i}${ext.toLowerCase()}`;
        i++;
      } while (fs.existsSync(path.join(imagesDir, newName)));

      try {
        fs.renameSync(full, path.join(imagesDir, newName));
        renames.push({ from: file, to: newName });
      } catch (err) {
        console.error(`Failed to rename ${file} -> ${newName}:`, err.message);
      }
    }
  });

  if (renames.length) {
    console.log('Renamed files:');
    renames.forEach(r => console.log(`  ${r.from} -> ${r.to}`));
  } else {
    console.log('No files needed renaming.');
  }
}

run();
