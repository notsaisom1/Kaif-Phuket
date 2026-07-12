#!/bin/bash

echo "Converting optimized images to WebP format..."

# Create WebP directory if it doesn't exist
mkdir -p src/assets/images/optimized/webp

# Convert hero images to WebP
echo "Converting hero images..."
ffmpeg -i src/assets/images/optimized/hero-luxury.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/hero-luxury.webp -y
ffmpeg -i src/assets/images/optimized/hero-pool.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/hero-pool.webp -y
ffmpeg -i src/assets/images/optimized/hero-fitness.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/hero-fitness.webp -y
ffmpeg -i src/assets/images/optimized/hero-restaurant.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/hero-restaurant.webp -y
ffmpeg -i src/assets/images/optimized/hero-spa.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/hero-spa.webp -y

# Convert logos to WebP
echo "Converting logos..."
ffmpeg -i src/assets/images/optimized/logo-header.png -c:v libwebp -quality 90 src/assets/images/optimized/webp/logo-header.webp -y
ffmpeg -i src/assets/images/optimized/logo-homepage.png -c:v libwebp -quality 90 src/assets/images/optimized/webp/logo-homepage.webp -y
ffmpeg -i src/assets/images/optimized/logo-footer.png -c:v libwebp -quality 90 src/assets/images/optimized/webp/logo-footer.webp -y

# Convert restaurant images to WebP
echo "Converting restaurant images..."
ffmpeg -i src/assets/images/optimized/booking.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/booking.webp -y
ffmpeg -i src/assets/images/optimized/bar.jpg -c:v libwebp -quality 85 src/assets/images/optimized/webp/bar.webp -y

echo "WebP conversion completed!"
echo "File sizes comparison:"
echo "Original optimized vs WebP:"
echo "Hero images:"
du -h src/assets/images/optimized/hero-*.jpg src/assets/images/optimized/webp/hero-*.webp 2>/dev/null || echo "Some files not found"

echo "Logos:"
du -h src/assets/images/optimized/logo-*.png src/assets/images/optimized/webp/logo-*.webp 2>/dev/null || echo "Some files not found"

echo "Restaurant images:"
du -h src/assets/images/optimized/{booking,bar}.jpg src/assets/images/optimized/webp/{booking,bar}.webp 2>/dev/null || echo "Some files not found"