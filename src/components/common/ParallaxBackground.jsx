import React, { useEffect, useState, memo } from 'react';

/**
 * Параллакс-фон с эффектом "окна" как background-attachment: fixed,
 * но без проблем с производительностью.
 *
 * Трюк: clip-path: inset(0) на контейнере создаёт clipping context,
 * который обрезает position: fixed дочерний элемент по границам контейнера.
 * Это даёт тот же визуальный эффект, но GPU-ускоренно.
 */
const ParallaxBackground = ({ src, overlay }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // На мобильных — обычный background без параллакса
  if (isMobile) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {overlay}
      </div>
    );
  }

  // На десктопе — используем background-attachment: fixed (более стабильно)
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {overlay}
    </div>
  );
};

export default memo(ParallaxBackground);
