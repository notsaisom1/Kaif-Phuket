import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const isInitialLoad = useRef(true);
  const transitionTimer = useRef(null);

  // Начальная загрузка при первом открытии
  React.useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      requestAnimationFrame(() => {
        if (window.hideInitialLoader) {
          window.hideInitialLoader();
        }
      });
      setTimeout(() => {
        setIsContentReady(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 500);

      // Fallback
      setTimeout(() => {
        setIsContentReady(true);
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  // Показать загрузку при переходе между страницами
  const showPageTransition = useCallback((duration = 350) => {
    // Очищаем предыдущий таймер если есть
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }

    // Сбрасываем body styles
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    // Показываем loading screen мгновенно
    setIsLoading(true);

    // Скролл наверх
    window.scrollTo(0, 0);

    return new Promise((resolve) => {
      transitionTimer.current = setTimeout(() => {
        setIsLoading(false);
        transitionTimer.current = null;
        resolve();
      }, duration);
    });
  }, []);

  const hideLoading = useCallback(() => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
    setIsLoading(false);
    setIsContentReady(true);
  }, []);

  return (
    <LoadingContext.Provider value={{
      isLoading,
      isContentReady,
      showPageTransition,
      hideLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
