#!/bin/bash

# Директория с изображениями
GALLERY_DIR="public/images/banya/gallery"

echo "🔄 Converting WebP images to JPG..."

for file in "$GALLERY_DIR"/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .webp)
        output_file="$GALLERY_DIR/$filename.jpg"

        echo "   Converting $filename.webp to $filename.jpg..."

        # Конвертируем WebP в JPG
        dwebp "$file" -o "$output_file"

        if [ -f "$output_file" ]; then
            original_size=$(ls -lh "$file" | awk '{print $5}')
            new_size=$(ls -lh "$output_file" | awk '{print $5}')
            echo "   ✅ $filename: $original_size → $new_size"
        else
            echo "   ❌ Failed to convert $filename"
        fi
    fi
done

echo "✨ Conversion complete!"
echo "📊 JPG files created:"
ls -lh "$GALLERY_DIR"/*.jpg 2>/dev/null | awk '{print "   " $9 ": " $5}'