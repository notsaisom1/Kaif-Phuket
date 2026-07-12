import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function convertToWebP() {
  console.log('🔄 Converting images to WebP format with multiple sizes...');
  
  try {
    // Создаем основную папку для WebP изображений
    const webpDir = 'public/images-webp';
    if (!fs.existsSync(webpDir)) {
      fs.mkdirSync(webpDir, { recursive: true });
    }

    // Создаем папки для разных размеров
    const sizeDirs = {
      original: webpDir,
      large: path.join(webpDir, 'large'),
      medium: path.join(webpDir, 'medium'),
      small: path.join(webpDir, 'small'),
      thumbnail: path.join(webpDir, 'thumbnail')
    };

    // Создаем все папки
    Object.values(sizeDirs).forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Находим все изображения
    const imageFiles = await glob('public/images/**/*.{jpg,jpeg,png}');
    
    let totalConverted = 0;
    let totalSaved = 0;
    
    // Карта размеров и настроек
    const sizes = {
      original: { width: null, quality: 80, effort: 6 },
      large: { width: 1600, quality: 75, effort: 6 },
      medium: { width: 1024, quality: 70, effort: 6 },
      small: { width: 768, quality: 70, effort: 5 },
      thumbnail: { width: 320, quality: 65, effort: 4 }
    };

    // Генерируем содержимое для imageMap.js
    let fallbackMap = '// Автоматически сгенерированная карта изображений\n';
    fallbackMap += 'export const imageMap = {\n';
    fallbackMap += '  // Базовая реализация для проверки поддержки WebP\n';
    fallbackMap += '  supportWebP: null,\n\n';
    fallbackMap += '  // Проверка поддержки WebP в браузере\n';
    fallbackMap += '  detectWebP: function() {\n';
    fallbackMap += '    if (this.supportWebP !== null) return this.supportWebP;\n';
    fallbackMap += '    const elem = document.createElement(\'canvas\');\n';
    fallbackMap += '    if (elem.getContext && elem.getContext(\'2d\')) {\n';
    fallbackMap += '      this.supportWebP = elem.toDataURL(\'image/webp\').indexOf(\'data:image/webp\') === 0;\n';
    fallbackMap += '    } else {\n';
    fallbackMap += '      this.supportWebP = false;\n';
    fallbackMap += '    }\n';
    fallbackMap += '    return this.supportWebP;\n';
    fallbackMap += '  },\n\n';
    fallbackMap += '  // Получение оптимального URL изображения\n';
    fallbackMap += '  getImageUrl: function(path, size = \'original\') {\n';
    fallbackMap += '    if (!path) return \'\';\n';
    fallbackMap += '    const basePath = path.replace(/^\\/images\\//, \'\');\n';
    fallbackMap += '    const mapEntry = this.images[basePath];\n';
    fallbackMap += '    if (mapEntry) {\n';
    fallbackMap += '      if (size && mapEntry[size]) {\n';
    fallbackMap += '        return this.detectWebP() ? mapEntry[size].webp : mapEntry[size].fallback;\n';
    fallbackMap += '      }\n';
    fallbackMap += '      return this.detectWebP() ? mapEntry.original.webp : mapEntry.original.fallback;\n';
    fallbackMap += '    }\n';
    fallbackMap += '    return path;\n';
    fallbackMap += '  },\n\n';
    fallbackMap += '  // Карта соответствия изображений\n';
    fallbackMap += '  images: {\n';

    for (const inputPath of imageFiles) {
      try {
        const relativePath = path.relative('public/images', inputPath);
        const dirPath = path.dirname(relativePath);
        const fileName = path.basename(relativePath);
        const fileNameWithoutExt = fileName.replace(/\.(jpg|jpeg|png)$/i, '');
        const originalSize = fs.statSync(inputPath).size;
        const metadata = await sharp(inputPath).metadata();

        // Добавляем запись в карту изображений
        fallbackMap += `    '${relativePath}': {\n`;

        for (const [sizeName, sizeConfig] of Object.entries(sizes)) {
          // Создаем папки если нужно
          const sizeDir = path.join(sizeDirs[sizeName], dirPath);
          if (!fs.existsSync(sizeDir)) {
            fs.mkdirSync(sizeDir, { recursive: true });
          }

          const outputPath = path.join(sizeDir, `${fileNameWithoutExt}.webp`);
          
          try {
            // Определяем нужный размер на основе исходного
            let targetWidth = sizeConfig.width;
            if (targetWidth && metadata.width < targetWidth) {
              targetWidth = metadata.width; // Не увеличиваем изображение
            }
            
            // Конвертируем в WebP с указанными размерами
            let sharpInstance = sharp(inputPath);
            
            // Изменяем размер, если указана ширина
            if (targetWidth) {
              sharpInstance = sharpInstance.resize(targetWidth, null, { 
                withoutEnlargement: true,
                fit: 'inside'
              });
            }
            
            // Применяем WebP преобразование
            sharpInstance = sharpInstance.webp({ 
              quality: sizeConfig.quality, 
              effort: sizeConfig.effort, 
              smartSubsample: true,
              alphaQuality: 90,
              nearLossless: metadata.format === 'png', // Для PNG используем near-lossless
              reductionEffort: 6,
            });
            
            // Сохраняем результат
            await sharpInstance.toFile(outputPath);

            const webpSize = fs.statSync(outputPath).size;
            
            // Добавляем размер в карту
            fallbackMap += `      "${sizeName}": {\n`;
            fallbackMap += `        webp: "/images-webp/${sizeName === 'original' ? '' : sizeName + '/'}${dirPath}/${fileNameWithoutExt}.webp",\n`;
            fallbackMap += `        fallback: "/images/${relativePath}",\n`;
            
            // Добавляем информацию о размерах
            if (targetWidth) {
              fallbackMap += `        width: ${targetWidth},\n`;
            }
            
            fallbackMap += `      },\n`;
            
            // Рассчитываем экономию места
            const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
            
            if (sizeName === 'original') {
              totalConverted++;
              totalSaved += (originalSize - webpSize);
              
              console.log(`📄 ${path.basename(inputPath)} → ${path.basename(outputPath)}: ${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB (-${savings}%)`);
            }
          } catch (error) {
            console.error(`❌ Error converting ${inputPath} (${sizeName}):`, error.message);
          }
        }
        fallbackMap += '    },\n';
        
      } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
      }
    }
    
    fallbackMap += '  }\n';
    fallbackMap += '};\n';
    
    console.log(`\n🎯 Converted ${totalConverted} images to WebP in multiple sizes`);
    console.log(`💾 Total saved: ${(totalSaved/1024/1024).toFixed(1)}MB`);
    console.log('✨ WebP conversion complete! Check public/images-webp/');
    
    // Создаем файл карты изображений
    const fallbackMapPath = 'src/utils/imageMap.js';
    fs.writeFileSync(fallbackMapPath, fallbackMap);
    console.log(`📋 Generated complete image map at ${fallbackMapPath}`);
    
    // Создаем index.html для каждой WebP папки для просмотра
    console.log('📄 Creating index.html for WebP directories...');
    for (const [sizeName, dir] of Object.entries(sizeDirs)) {
      const indexPath = path.join(dir, 'index.html');
      const indexContent = `
<!DOCTYPE html>
<html>
<head>
  <title>WebP Images - ${sizeName}</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { color: #333; }
    .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .image-item { border: 1px solid #ddd; padding: 10px; border-radius: 4px; }
    img { max-width: 100%; height: auto; display: block; }
    .image-info { font-size: 12px; margin-top: 8px; color: #666; }
  </style>
</head>
<body>
  <h1>WebP Images - ${sizeName}</h1>
  <div class="gallery">
    <!-- Images will be listed here -->
  </div>
  <script>
    // Simple script to list all WebP images
    async function listImages() {
      try {
        const gallery = document.querySelector('.gallery');
        const files = await fetch('').then(r => r.text());
        const parser = new DOMParser();
        const doc = parser.parseFromString(files, 'text/html');
        const links = Array.from(doc.querySelectorAll('a')).filter(a => a.href.endsWith('.webp'));
        
        links.forEach(link => {
          const div = document.createElement('div');
          div.className = 'image-item';
          
          const img = document.createElement('img');
          img.src = link.href;
          img.alt = link.textContent;
          img.loading = 'lazy';
          
          const info = document.createElement('div');
          info.className = 'image-info';
          info.textContent = link.textContent;
          
          div.appendChild(img);
          div.appendChild(info);
          gallery.appendChild(div);
        });
      } catch (e) {
        console.error(e);
      }
    }
    
    listImages();
  </script>
</body>
</html>
      `;
      fs.writeFileSync(indexPath, indexContent);
    }
    console.log('✅ Index files created!');
    
  } catch (error) {
    console.error('❌ Error converting to WebP:', error);
  }
}

convertToWebP(); 