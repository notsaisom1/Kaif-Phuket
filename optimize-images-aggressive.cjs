const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 60; // Агрессивное сжатие
const MAX_WIDTH = 1200; // Максимальная ширина
const MAX_HEIGHT = 800; // Максимальная высота

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();

    let pipeline = sharp(inputPath);

    // Resize if too large
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    const ext = path.extname(inputPath).toLowerCase();

    if (ext === '.webp') {
      await pipeline
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await pipeline
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(outputPath);
    }

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    if (newSize < originalSize) {
      console.log(`✓ ${path.basename(inputPath)}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (-${savings}%)`);
      return { original: originalSize, optimized: newSize };
    } else {
      // Keep original if new is larger
      fs.copyFileSync(inputPath, outputPath);
      console.log(`= ${path.basename(inputPath)}: kept original`);
      return { original: originalSize, optimized: originalSize };
    }
  } catch (err) {
    console.error(`✗ ${inputPath}: ${err.message}`);
    return { original: 0, optimized: 0 };
  }
}

async function processDirectory(dir) {
  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const subResults = await processDirectory(fullPath);
      totalOriginal += subResults.original;
      totalOptimized += subResults.optimized;
      count += subResults.count;
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(file.name)) {
      const tempPath = fullPath + '.tmp';
      const result = await optimizeImage(fullPath, tempPath);

      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(fullPath);
        fs.renameSync(tempPath, fullPath);
      }

      totalOriginal += result.original;
      totalOptimized += result.optimized;
      count++;
    }
  }

  return { original: totalOriginal, optimized: totalOptimized, count };
}

async function main() {
  console.log('🚀 Агрессивная оптимизация изображений...\n');
  console.log(`Настройки: quality=${QUALITY}, maxWidth=${MAX_WIDTH}, maxHeight=${MAX_HEIGHT}\n`);

  const dirs = [
    './public/images-webp',
    './public/images-optimized',
    './public/images'
  ];

  let grandTotal = { original: 0, optimized: 0, count: 0 };

  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      console.log(`\n📁 Обработка ${dir}...`);
      const result = await processDirectory(dir);
      grandTotal.original += result.original;
      grandTotal.optimized += result.optimized;
      grandTotal.count += result.count;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 ИТОГО:`);
  console.log(`   Файлов: ${grandTotal.count}`);
  console.log(`   Было: ${(grandTotal.original / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Стало: ${(grandTotal.optimized / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Сэкономлено: ${((grandTotal.original - grandTotal.optimized) / 1024 / 1024).toFixed(1)} MB`);
}

main().catch(console.error);
