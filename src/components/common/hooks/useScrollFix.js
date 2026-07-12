import { useEffect, useRef } from 'react';

const useScrollFix = () => {
  const intervalRef = useRef();

  useEffect(() => {
    const fixDisappearingElements = () => {
      // Находим хедер
      const header = document.querySelector('header.kaif-header');
      
      if (header) {
        const headerStyles = window.getComputedStyle(header);
        
        // Проверяем, исчез ли хедер
        if (headerStyles.opacity === '0' || 
            headerStyles.visibility === 'hidden' || 
            headerStyles.display === 'none') {
          
          console.warn('🔧 Исправляю исчезновение хедера...');
          
          // Принудительно восстанавливаем хедер
          header.style.opacity = '1';
          header.style.visibility = 'visible';
          header.style.display = 'flex';
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.left = '0';
          header.style.right = '0';
          header.style.width = '100%';
          header.style.height = '65px';
          header.style.zIndex = '99999';
          header.style.backgroundColor = '#ffffff';
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
          header.style.transform = 'none';
          header.style.willChange = 'auto';
          
          // Добавляем класс для защиты
          header.classList.add('force-visible', 'no-transform');
        }
      }

      // Проверяем другие критические элементы
      const criticalElements = document.querySelectorAll('[data-critical], .contacts-page section');
      criticalElements.forEach(element => {
        const styles = window.getComputedStyle(element);
        if (styles.opacity === '0' && element.getAttribute('data-should-be-visible') === 'true') {
          element.style.opacity = '1';
          element.style.visibility = 'visible';
        }
      });
    };

    // Запускаем проверку каждые 100ms
    intervalRef.current = setInterval(fixDisappearingElements, 100);

    // Также проверяем при скролле
    const handleScroll = () => {
      fixDisappearingElements();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Первоначальная проверка
    fixDisappearingElements();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    forceElementVisible: (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.display = 'block';
        element.classList.add('force-visible');
      }
    }
  };
};

export default useScrollFix; 