import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;
  transition: all 0.3s ease;

  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const LazyImage = ({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  onLoad,
  onError,
  placeholder,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
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
  }, []);

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
      {(inView || loading === 'eager') && (
        <Image
          ref={imgRef}
          src={error ? placeholder : src}
          alt={alt}
          loaded={loaded}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </ImageContainer>
  );
};

export default LazyImage;