import { useEffect } from 'react';

/**
 * Хук для обеспечения фиксированного позиционирования хедера
 * Следит за тем, чтобы хедер всегда оставался зафиксированным сверху
 */
export const useFixedHeader = () => {
  useEffect(() => {
    const ensureHeaderFixed = () => {
      const header = document.querySelector('header.kaif-header');
      if (header) {
        // Проверяем и корректируем позиционирование если нужно
        const computedStyle = window.getComputedStyle(header);
        
        if (computedStyle.position !== 'fixed') {
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.left = '0';
          header.style.right = '0';
          header.style.width = '100%';
          header.style.zIndex = '1000';
          header.style.backgroundColor = '#ffffff';
        }
      }
    };

    // Проверяем при загрузке
    ensureHeaderFixed();

    // Проверяем при изменении размера окна
    const handleResize = () => {
      ensureHeaderFixed();
    };

    // Проверяем при изменении ориентации
    const handleOrientationChange = () => {
      setTimeout(ensureHeaderFixed, 100); // Небольшая задержка для iOS
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Очистка слушателей
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
};

export default useFixedHeader; 