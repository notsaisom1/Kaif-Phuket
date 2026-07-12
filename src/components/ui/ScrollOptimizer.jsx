import React, { useEffect } from 'react';
import { isMobile } from './animations';

// Компонент для оптимизации скролла и анимаций
const ScrollOptimizer = ({ children }) => {
  useEffect(() => {
    const mobile = isMobile();
    
    // Оптимизация для мобильных устройств
    if (mobile) {
      // Отключаем плавный скролл на мобильных
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Добавляем класс для мобильных оптимизаций
      document.body.classList.add('mobile-optimized');
      
      // Предотвращаем bounce эффект на iOS
      document.body.style.overscrollBehavior = 'none';
      document.body.style.webkitOverscrollBehavior = 'none';
      
      // Оптимизация GPU слоев только для элементов с анимациями
      const style = document.createElement('style');
      style.textContent = `
        .mobile-optimized *[data-framer-motion] {
          will-change: transform, opacity;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        /* Отключаем тяжелые эффекты на мобильных */
        @media (max-width: 768px) {
          .mobile-optimized .animate-wellness-breathe,
          .mobile-optimized .animate-wellness-float {
            animation: none !important;
          }
          
          .mobile-optimized main *:hover,
          .mobile-optimized section *:hover {
            transform: none !important;
            scale: 1 !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.classList.remove('mobile-optimized');
        document.head.removeChild(style);
      };
    }
  }, []);

  return <>{children}</>;
};

// Хук для оптимизации Intersection Observer
export const useOptimizedIntersectionObserver = (callback, options = {}) => {
  const mobile = isMobile();
  
  const optimizedOptions = {
    ...options,
    // Увеличиваем rootMargin для мобильных, чтобы анимации срабатывали раньше
    rootMargin: mobile ? '50px 0px -50px 0px' : '100px 0px -100px 0px',
    // Уменьшаем threshold для мобильных
    threshold: mobile ? 0.1 : (options.threshold || 0.2)
  };
  
  return React.useCallback((node) => {
    if (!node) return;
    
    const observer = new IntersectionObserver(callback, optimizedOptions);
    observer.observe(node);
    
    return () => observer.disconnect();
  }, [callback, mobile]);
};

// Утилита для дебаунса скролла
export const useScrollDebounce = (callback, delay = 100) => {
  const timeoutRef = React.useRef(null);
  
  return React.useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};

// Компонент для ленивой загрузки с оптимизацией
export const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);
  const mobile = isMobile();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: mobile ? 0.05 : threshold,
        rootMargin: mobile ? '100px' : '200px'
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [mobile, threshold]);
  
  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ height: '200px' }} />}
    </div>
  );
};

export default ScrollOptimizer; 