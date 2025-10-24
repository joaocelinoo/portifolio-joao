# Portfolio - Image Manifest Generator

This project includes a small Node script to automatically generate `images/images.json` from the files inside the `images/` folder.

Why
- Keeps a consistent manifest mapping keys (derived from image filenames) to actual files.
- Useful for the site which loads images by `data-company` keys.

How to run

PowerShell (recommended):
```powershell
cd 'C:\Users\Joaof\Projects\portfolio-joao-celino'
# using node directly
node scripts/generate-images-manifest.js
# or using npm (after creating package.json)
npm run generate-images-manifest
```

What it does
- Scans `images/` for files with extensions `png, jpg, jpeg, svg, webp, gif`.
- Generates `images/images.json` mapping normalized keys to filenames.
- Normalization: lowercased, spaces/underscores -> hyphens, non-alphanum -> hyphens, collapse multiple hyphens.

Notes
- If two files normalize to the same key, the script appends a numeric suffix (`-2`, `-3`, ...).
- On Linux servers be careful with case-sensitivity; the script preserves actual filenames in the manifest.
