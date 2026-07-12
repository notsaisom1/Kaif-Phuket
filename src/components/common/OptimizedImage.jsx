import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;

  &.loading {
    background-color: #e8e8e8;
  }
`;

const Picture = styled.picture`
  width: 100%;
  height: 100%;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;

const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  onLoad,
  onError,
  sizes = '100vw',
  webpSrc,
  avifSrc,
  srcSet,
  webpSrcSet,
  avifSrcSet,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Генерируем пути для оптимизированных изображений
  const generateOptimizedPaths = (originalSrc) => {
    if (!originalSrc) return {};

    const pathParts = originalSrc.split('/');
    const fileName = pathParts.pop();
    const extension = fileName.split('.').pop();
    const baseName = fileName.replace(`.${extension}`, '');
    const basePath = pathParts.join('/');

    return {
      webp: `${basePath}/${baseName}.webp`,
      avif: `${basePath}/${baseName}.avif`,
      optimized: originalSrc.includes('/optimized/') ? originalSrc : `${basePath}/optimized/${fileName}`
    };
  };

  const optimizedPaths = generateOptimizedPaths(src);

  useEffect(() => {
    if (loading === 'eager') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = (e) => {
    setLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setError(true);
    if (onError) onError(e);
  };

  return (
    <ImageContainer
      ref={containerRef}
      className={`${className || ''} ${!loaded && !error ? 'loading' : ''}`}
      style={style}
    >
      {inView && (
        <Picture>
          {/* AVIF format (best compression, modern browsers) */}
          {(avifSrc || avifSrcSet) && (
            <source
              srcSet={avifSrcSet || avifSrc}
              type="image/avif"
              sizes={sizes}
            />
          )}

          {/* WebP format (good compression, wide support) */}
          <source
            srcSet={webpSrcSet || webpSrc || optimizedPaths.webp}
            type="image/webp"
            sizes={sizes}
          />

          {/* Fallback to original format */}
          <Image
            src={optimizedPaths.optimized || src}
            srcSet={srcSet}
            alt={alt}
            loaded={loaded}
            loading={loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </Picture>
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;