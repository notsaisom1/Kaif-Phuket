#!/usr/bin/env node

/**
 * Скрипт для дополнительного сжатия WebP изображений
 * Использует sharp для оптимизации изображений с качеством 75%
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, 'public', 'images-webp');
const QUALITY = 75; // Качество WebP (75% - хороший баланс)
const EFFORT = 6; // Усилие сжатия (0-6, больше = меньше размер, но дольше)

let processedCount = 0;
let savedBytes = 0;

/**
 * Рекурсивно обрабатывает все WebP файлы в директории
 */
async function processDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      await processDirectory(fullPath);
    } else if (item.isFile() && item.name.endsWith('.webp')) {
      await compressWebP(fullPath);
    }
  }
}

/**
 * Сжимает WebP изображение
 */
async function compressWebP(filePath) {
  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Создаем временный файл
    const tempPath = filePath + '.tmp';

    // Сжимаем изображение
    await sharp(filePath)
      .webp({
        quality: QUALITY,
        effort: EFFORT,
        lossless: false
      })
      .toFile(tempPath);

    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;

    // Заменяем только если новый файл меньше
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savedKB = ((originalSize - newSize) / 1024).toFixed(2);
      const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

      console.log(`✓ ${path.relative(SOURCE_DIR, filePath)}: ${savedKB} KB saved (${reduction}% reduction)`);

      processedCount++;
      savedBytes += (originalSize - newSize);
    } else {
      // Удаляем временный файл, если он больше оригинала
      fs.unlinkSync(tempPath);
      console.log(`⊘ ${path.relative(SOURCE_DIR, filePath)}: Already optimized`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Основная функция
 */
async function main() {
  console.log('🖼️  WebP Image Compression Tool');
  console.log('================================\n');
  console.log(`Source directory: ${SOURCE_DIR}`);
  console.log(`Quality: ${QUALITY}%`);
  console.log(`Effort: ${EFFORT}/6\n`);
  console.log('Processing...\n');

  const startTime = Date.now();

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Error: Directory ${SOURCE_DIR} does not exist`);
    process.exit(1);
  }

  await processDirectory(SOURCE_DIR);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const totalSavedMB = (savedBytes / (1024 * 1024)).toFixed(2);

  console.log('\n================================');
  console.log('✓ Compression Complete!');
  console.log(`Files optimized: ${processedCount}`);
  console.log(`Total saved: ${totalSavedMB} MB`);
  console.log(`Time taken: ${duration}s`);
}

main().catch(console.error);
