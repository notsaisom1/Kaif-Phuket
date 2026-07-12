#!/bin/bash

# Image optimization script
echo "Optimizing images for better web performance..."

# Create optimized directory if it doesn't exist
mkdir -p src/assets/images/optimized

# Optimize hero images
echo "Optimizing hero images..."
ffmpeg -i src/assets/images/hero/hero-luxury.png -vf "scale=1920:1080" -q:v 2 src/assets/images/optimized/hero-luxury.jpg -y
ffmpeg -i src/assets/images/hero/hero-pool.jpg -vf "scale=1920:1080" -q:v 2 src/assets/images/optimized/hero-pool.jpg -y
ffmpeg -i src/assets/images/hero/hero-fitness.jpg -vf "scale=1920:1080" -q:v 2 src/assets/images/optimized/hero-fitness.jpg -y
ffmpeg -i src/assets/images/hero/hero-restaurant.jpg -vf "scale=1920:1080" -q:v 2 src/assets/images/optimized/hero-restaurant.jpg -y
ffmpeg -i src/assets/images/hero/hero-spa.jpg -vf "scale=1920:1080" -q:v 2 src/assets/images/optimized/hero-spa.jpg -y

# Optimize logos
echo "Optimizing logos..."
ffmpeg -i src/assets/images/logos/logo-header.png -vf "scale=400:-1" -q:v 2 src/assets/images/optimized/logo-header.png -y
ffmpeg -i src/assets/images/logos/logo-homepage.png -q:v 2 src/assets/images/optimized/logo-homepage.png -y
ffmpeg -i src/assets/images/logos/logo-footer.png -q:v 2 src/assets/images/optimized/logo-footer.png -y

# Optimize restaurant images
echo "Optimizing restaurant images..."
ffmpeg -i src/assets/images/restaurant/booking.jpg -vf "scale=1200:-1" -q:v 2 src/assets/images/optimized/booking.jpg -y
ffmpeg -i src/assets/images/restaurant/bar.jpg -vf "scale=1200:-1" -q:v 2 src/assets/images/optimized/bar.jpg -y

echo "Image optimization completed!"
echo "Original sizes vs optimized:"
echo "Before optimization:"
du -h src/assets/images/hero/hero-luxury.png
du -h src/assets/images/logos/logo-header.png
du -h src/assets/images/restaurant/booking.jpg
du -h src/assets/images/restaurant/bar.jpg

echo "After optimization:"
du -h src/assets/images/optimized/hero-luxury.jpg 2>/dev/null || echo "hero-luxury.jpg: not found"
du -h src/assets/images/optimized/logo-header.png 2>/dev/null || echo "logo-header.png: not found"
du -h src/assets/images/optimized/booking.jpg 2>/dev/null || echo "booking.jpg: not found"
du -h src/assets/images/optimized/bar.jpg 2>/dev/null || echo "bar.jpg: not found"