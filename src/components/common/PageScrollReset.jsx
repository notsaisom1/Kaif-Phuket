import { useLayoutEffect } from 'react';

const PageScrollReset = () => {
  // Используем useLayoutEffect для синхронного скролла ДО отрисовки
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default PageScrollReset; 