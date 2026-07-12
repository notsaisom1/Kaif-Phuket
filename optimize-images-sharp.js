import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Функция для проверки валидности изображения
async function isValidImage(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    if (stats.size < 100) return false; // Слишком маленький файл
    
    await sharp(imagePath).metadata();
    return true;
  } catch (error) {
    console.log(`⚠️  Skipping invalid image: ${path.basename(imagePath)}`);
    return false;
  }
}

async function optimizeImages() {
  console.log('🖼️  Starting image optimization with Sharp...');
  
  try {
    // Создаем папку для оптимизированных изображений
    const outputDir = 'public/images-optimized';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Находим все изображения
    const jpgFiles = await glob('public/images/**/*.{jpg,jpeg}');
    const pngFiles = await glob('public/images/**/*.png');
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    let processedCount = 0;

    // Обрабатываем JPG файлы
    for (const inputPath of jpgFiles) {
      // Проверяем валидность изображения
      if (!(await isValidImage(inputPath))) {
        continue;
      }

      const relativePath = path.relative('public/images', inputPath);
      const outputPath = path.join(outputDir, relativePath);
      
      // Создаем папки если нужно
      const outputDirPath = path.dirname(outputPath);
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      const originalSize = fs.statSync(inputPath).size;
      const metadata = await sharp(inputPath).metadata();
      
      // Определяем размер для изображения (уменьшаем очень большие)
      const maxWidth = 1600; // Уменьшаем максимальную ширину для лучшей производительности
      let resizeOptions = {};
      
      if (metadata.width > maxWidth) {
        resizeOptions = {
          width: maxWidth, 
          withoutEnlargement: true,
          fit: 'inside'
        };
      }
      
      await sharp(inputPath)
        .resize(resizeOptions)
        .jpeg({ 
          quality: 75, // Уменьшаем качество для лучшего сжатия
          progressive: true,
          mozjpeg: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true
        })
        .toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      processedCount++;
      
      console.log(`📄 ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
    }

    // Обрабатываем PNG файлы
    for (const inputPath of pngFiles) {
      // Проверяем валидность изображения
      if (!(await isValidImage(inputPath))) {
        continue;
      }

      const relativePath = path.relative('public/images', inputPath);
      const outputPath = path.join(outputDir, relativePath);
      
      // Создаем папки если нужно
      const outputDirPath = path.dirname(outputPath);
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      const originalSize = fs.statSync(inputPath).size;
      const metadata = await sharp(inputPath).metadata();
      
      // Определяем размер для изображения (уменьшаем очень большие)
      const maxWidth = 1600; // Уменьшаем максимальную ширину
      let resizeOptions = {};
      
      if (metadata.width > maxWidth) {
        resizeOptions = {
          width: maxWidth, 
          withoutEnlargement: true,
          fit: 'inside'
        };
      }
      
      try {
        await sharp(inputPath)
          .resize(resizeOptions)
          .png({ 
            quality: 80,
            compressionLevel: 9, // Максимальное сжатие
            palette: true,
            colors: 256, // Оптимизация палитры
            dither: 1.0
          })
          .toFile(outputPath);
      } catch (err) {
        // Если не удалось оптимизировать с палитрой, пробуем без нее
        await sharp(inputPath)
          .resize(resizeOptions)
          .png({ 
            quality: 80,
            compressionLevel: 9
          })
          .toFile(outputPath);
      }

      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      processedCount++;
      
      console.log(`📄 ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (-${savings}%)`);
    }
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
    console.log(`\n🎯 Processed ${processedCount} images`);
    console.log(`📊 Total: ${(totalOriginal/1024/1024).toFixed(1)}MB → ${(totalOptimized/1024/1024).toFixed(1)}MB (-${totalSavings}%)`);
    console.log('✨ Optimization complete! Check public/images-optimized/');
    
    // Копируем оптимизированные изображения обратно в public/images
    console.log('🔄 Replacing original images with optimized versions...');
    
    // Копируем все оптимизированные изображения в исходную директорию
    const copyFiles = async (directory) => {
      const files = await glob(`${directory}/**/*.{jpg,jpeg,png}`);
      for (const file of files) {
        const relativePath = path.relative(outputDir, file);
        const destPath = path.join('public/images', relativePath);
        fs.copyFileSync(file, destPath);
      }
    };
    
    await copyFiles(outputDir);
    console.log('✅ Original images replaced with optimized versions!');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages(); 