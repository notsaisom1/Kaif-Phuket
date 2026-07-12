#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src/assets/images/hero/hero-luxury.png');
const outputFile = path.join(__dirname, 'src/assets/images/hero/hero-luxury.webp');

console.log('Converting hero-luxury.png to WebP...');
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);

const inputStats = fs.statSync(inputFile);
console.log(`Original size: ${(inputStats.size / (1024 * 1024)).toFixed(2)} MB`);

sharp(inputFile)
  .webp({
    quality: 80,
    effort: 6,
    lossless: false
  })
  .toFile(outputFile)
  .then(info => {
    const outputStats = fs.statSync(outputFile);
    console.log(`\n✓ Converted successfully!`);
    console.log(`New size: ${(outputStats.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Savings: ${((inputStats.size - outputStats.size) / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Reduction: ${(((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1)}%`);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
