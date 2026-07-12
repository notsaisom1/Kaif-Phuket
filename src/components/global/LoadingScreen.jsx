import React, { useEffect, useRef } from 'react';

// CSS анимация - надёжнее чем React state
const styles = `
  .loading-curtain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    z-index: 99999;
    pointer-events: auto;
    transform: translateY(0%);
    visibility: visible;
  }

  .loading-curtain.exiting {
    pointer-events: none;
    transform: translateY(100%);
    transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .loading-curtain.hidden {
    visibility: hidden;
    pointer-events: none;
  }
`;

// Добавляем стили один раз
if (typeof document !== 'undefined' && !document.getElementById('loading-curtain-styles')) {
  const styleEl = document.createElement('style');
  styleEl.id = 'loading-curtain-styles';
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}

const LoadingScreen = ({ isVisible }) => {
  const ref = useRef(null);
  const prevVisible = useRef(isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isVisible) {
      // Показываем мгновенно
      el.classList.remove('exiting', 'hidden');
    } else if (prevVisible.current && !isVisible) {
      // Запускаем exit анимацию
      el.classList.remove('hidden');

      // Force reflow
      el.offsetHeight;

      // Добавляем класс анимации
      el.classList.add('exiting');

      // После анимации скрываем
      const onEnd = () => {
        el.classList.add('hidden');
        el.classList.remove('exiting');
      };

      el.addEventListener('transitionend', onEnd, { once: true });

      // Fallback таймер
      const fallback = setTimeout(onEnd, 2200);

      return () => {
        clearTimeout(fallback);
        el.removeEventListener('transitionend', onEnd);
      };
    }

    prevVisible.current = isVisible;
  }, [isVisible]);

  return <div ref={ref} className="loading-curtain" />;
};

export default LoadingScreen;
