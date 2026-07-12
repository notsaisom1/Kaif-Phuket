#!/usr/bin/env node

/**
 * Скрипт для агрессивной оптимизации JPG изображений
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIRECTORIES = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'images-optimized'),
  path.join(__dirname, 'src', 'assets', 'images')
];

const QUALITY = 75; // Качество JPG (75% - хороший баланс)

let processedCount = 0;
let savedBytes = 0;

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⊘ Skipping ${dir} - does not exist`);
    return;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      await processDirectory(fullPath);
    } else if (item.isFile() && /\.(jpg|jpeg)$/i.test(item.name)) {
      await compressJPG(fullPath);
    }
  }
}

async function compressJPG(filePath) {
  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Пропускаем маленькие файлы
    if (originalSize < 10 * 1024) {
      return;
    }

    const tempPath = filePath + '.tmp';

    await sharp(filePath)
      .jpeg({
        quality: QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(tempPath);

    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;

    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savedKB = ((originalSize - newSize) / 1024).toFixed(2);
      const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

      console.log(`✓ ${path.relative(__dirname, filePath)}: ${savedKB} KB saved (${reduction}%)`);

      processedCount++;
      savedBytes += (originalSize - newSize);
    } else {
      fs.unlinkSync(tempPath);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  JPG Image Optimization Tool');
  console.log('================================\n');
  console.log(`Quality: ${QUALITY}%`);
  console.log('Processing...\n');

  const startTime = Date.now();

  for (const dir of DIRECTORIES) {
    await processDirectory(dir);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const totalSavedMB = (savedBytes / (1024 * 1024)).toFixed(2);

  console.log('\n================================');
  console.log('✓ Optimization Complete!');
  console.log(`Files optimized: ${processedCount}`);
  console.log(`Total saved: ${totalSavedMB} MB`);
  console.log(`Time taken: ${duration}s`);
}

main().catch(console.error);
