const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../public/images/zones');
const OUT_BASE = path.resolve(__dirname, '../public');

const VARIANTS = [
  { name: 'xs',     width: 480,  dir: 'images-webp/xs/zones',     dirAvif: 'images-avif/xs/zones' },
  { name: 'small',  width: 768,  dir: 'images-webp/small/zones',  dirAvif: 'images-avif/small/zones' },
  { name: 'medium', width: 1024, dir: 'images-webp/medium/zones', dirAvif: 'images-avif/medium/zones' },
  { name: 'full',   width: 1920, dir: 'images-webp/zones',        dirAvif: 'images-avif/zones' },
];

const FILES = ['banya.jpg', 'restaurant.jpg', 'spa.jpg', 'pool.jpg', 'fitness.jpg', 'combat.jpg', 'beauty.jpg'];

async function run() {
  for (const v of VARIANTS) {
    fs.mkdirSync(path.join(OUT_BASE, v.dir), { recursive: true });
    fs.mkdirSync(path.join(OUT_BASE, v.dirAvif), { recursive: true });
  }

  for (const file of FILES) {
    const src = path.join(SRC_DIR, file);
    if (!fs.existsSync(src)) {
      console.warn('skip missing', file);
      continue;
    }
    const base = path.parse(file).name;
    for (const v of VARIANTS) {
      const webpOut = path.join(OUT_BASE, v.dir, base + '.webp');
      const avifOut = path.join(OUT_BASE, v.dirAvif, base + '.avif');

      await sharp(src)
        .resize({ width: v.width, withoutEnlargement: true })
        .webp({ quality: v.name === 'xs' ? 72 : 78, effort: 5 })
        .toFile(webpOut);

      await sharp(src)
        .resize({ width: v.width, withoutEnlargement: true })
        .avif({ quality: v.name === 'xs' ? 48 : 52, effort: 5 })
        .toFile(avifOut);

      const wSize = fs.statSync(webpOut).size;
      const aSize = fs.statSync(avifOut).size;
      console.log(`${base} ${v.name} ${v.width}w  webp=${(wSize/1024).toFixed(1)}KB  avif=${(aSize/1024).toFixed(1)}KB`);
    }
  }
}

run().catch(e => { console.error(e); process.exit(1); });
