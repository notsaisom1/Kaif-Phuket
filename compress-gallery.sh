#!/bin/bash

# Директория с оригинальными изображениями
GALLERY_DIR="public/images/banya/gallery"
BACKUP_DIR="${GALLERY_DIR}/originals"

# Создаем директорию для бэкапа оригиналов
echo "📦 Creating backup directory..."
mkdir -p "$BACKUP_DIR"

# Перемещаем оригиналы в бэкап
echo "💾 Backing up original images..."
for file in "$GALLERY_DIR"/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "   Moving $filename to backup..."
        mv "$file" "$BACKUP_DIR/$filename"
    fi
done

# Оптимизируем изображения
echo "🔄 Compressing images..."
for file in "$BACKUP_DIR"/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        output_file="$GALLERY_DIR/$filename"

        echo "   Compressing $filename..."

        # Сжимаем с качеством 85% и максимальной шириной 1200px
        cwebp -q 85 -resize 1200 0 -mt "$file" -o "$output_file"

        # Показываем размеры
        original_size=$(ls -lh "$file" | awk '{print $5}')
        new_size=$(ls -lh "$output_file" | awk '{print $5}')
        echo "   ✅ $filename: $original_size → $new_size"
    fi
done

echo "✨ Compression complete!"
echo "📍 Original files saved in: $BACKUP_DIR"
echo "🖼️  Optimized files in: $GALLERY_DIR"

# Показываем итоговые размеры
echo ""
echo "📊 Final sizes:"
ls -lh "$GALLERY_DIR"/*.webp 2>/dev/null | awk '{print "   " $9 ": " $5}'