#!/bin/bash

# Script to optimize restaurant images
# Prerequisites: Install imagemagick and webp tools
# brew install imagemagick webp

echo "🖼️  Starting Restaurant Image Optimization..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Source and destination directories
SRC_DIR="src/assets/images/restaurant"
DEST_DIR="public/images-optimized/restaurant"
WEBP_DIR="public/images-optimized/restaurant/webp"

# Create destination directories if they don't exist
mkdir -p "$DEST_DIR"
mkdir -p "$WEBP_DIR"

# Function to optimize JPEG images
optimize_jpeg() {
    local input=$1
    local output=$2
    local filename=$(basename "$input")

    echo -e "${YELLOW}Optimizing: $filename${NC}"

    # Use ImageMagick to resize and optimize
    # Max width: 1920px, quality: 85%, progressive encoding
    convert "$input" \
        -resize "1920>" \
        -quality 85 \
        -interlace Plane \
        -strip \
        "$output"

    # Also create a WebP version
    local webp_output="${WEBP_DIR}/${filename%.*}.webp"
    cwebp -q 80 "$output" -o "$webp_output" 2>/dev/null

    # Show size reduction
    local original_size=$(du -h "$input" | cut -f1)
    local optimized_size=$(du -h "$output" | cut -f1)
    local webp_size=$(du -h "$webp_output" | cut -f1)

    echo -e "${GREEN}✓ $filename: $original_size → JPEG: $optimized_size, WebP: $webp_size${NC}"
}

# Function to optimize PNG images
optimize_png() {
    local input=$1
    local output=$2
    local filename=$(basename "$input")

    echo -e "${YELLOW}Optimizing: $filename${NC}"

    # Use ImageMagick to optimize PNG
    convert "$input" \
        -resize "1920>" \
        -strip \
        -define png:compression-level=9 \
        "$output"

    # Also create a WebP version
    local webp_output="${WEBP_DIR}/${filename%.*}.webp"
    cwebp -q 90 "$output" -o "$webp_output" 2>/dev/null

    # Show size reduction
    local original_size=$(du -h "$input" | cut -f1)
    local optimized_size=$(du -h "$output" | cut -f1)
    local webp_size=$(du -h "$webp_output" | cut -f1)

    echo -e "${GREEN}✓ $filename: $original_size → PNG: $optimized_size, WebP: $webp_size${NC}"
}

# Process all images
echo -e "\n${YELLOW}Processing restaurant images...${NC}\n"

# Process JPEG files
for img in "$SRC_DIR"/*.{jpg,jpeg,JPG,JPEG} 2>/dev/null; do
    [ -f "$img" ] || continue
    filename=$(basename "$img")
    optimize_jpeg "$img" "$DEST_DIR/$filename"
done

# Process PNG files
for img in "$SRC_DIR"/*.{png,PNG} 2>/dev/null; do
    [ -f "$img" ] || continue
    filename=$(basename "$img")
    optimize_png "$img" "$DEST_DIR/$filename"
done

# Create responsive versions for hero image
if [ -f "$SRC_DIR/booking.jpg" ]; then
    echo -e "\n${YELLOW}Creating responsive versions for hero image...${NC}"

    # Mobile version (768px)
    convert "$SRC_DIR/booking.jpg" \
        -resize "768x" \
        -quality 85 \
        -interlace Plane \
        -strip \
        "$DEST_DIR/booking-mobile.jpg"

    # Tablet version (1024px)
    convert "$SRC_DIR/booking.jpg" \
        -resize "1024x" \
        -quality 85 \
        -interlace Plane \
        -strip \
        "$DEST_DIR/booking-tablet.jpg"

    # Desktop version (1920px)
    convert "$SRC_DIR/booking.jpg" \
        -resize "1920x" \
        -quality 85 \
        -interlace Plane \
        -strip \
        "$DEST_DIR/booking-desktop.jpg"

    echo -e "${GREEN}✓ Created responsive versions${NC}"
fi

# Summary
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}✨ Image optimization complete!${NC}"
echo -e "${GREEN}========================================${NC}\n"

# Show total size reduction
original_total=$(du -sh "$SRC_DIR" 2>/dev/null | cut -f1)
optimized_total=$(du -sh "$DEST_DIR" 2>/dev/null | cut -f1)

echo -e "Original total size: ${YELLOW}$original_total${NC}"
echo -e "Optimized total size: ${GREEN}$optimized_total${NC}"

echo -e "\n${YELLOW}Tips for better performance:${NC}"
echo -e "1. Use <picture> element with WebP and JPEG fallback"
echo -e "2. Implement lazy loading for below-the-fold images"
echo -e "3. Use responsive images with srcset attribute"
echo -e "4. Consider using a CDN for image delivery\n"