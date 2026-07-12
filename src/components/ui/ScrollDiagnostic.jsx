import { useEffect, useState } from 'react';

const ScrollDiagnostic = () => {
  const [scrollInfo, setScrollInfo] = useState({
    scrollY: 0,
    headerVisible: true,
    elementsInfo: []
  });

  useEffect(() => {
    let frameId;

    const checkElements = () => {
      const header = document.querySelector('header.kaif-header');
      const elementsToCheck = document.querySelectorAll('[data-framer-motion], .contacts-page section');
      
      const info = {
        scrollY: window.scrollY,
        headerVisible: header ? window.getComputedStyle(header).visibility === 'visible' : false,
        headerOpacity: header ? window.getComputedStyle(header).opacity : '0',
        headerDisplay: header ? window.getComputedStyle(header).display : 'none',
        elementsInfo: Array.from(elementsToCheck).slice(0, 5).map(el => {
          const rect = el.getBoundingClientRect();
          const styles = window.getComputedStyle(el);
          return {
            tag: el.tagName,
            visible: styles.visibility,
            opacity: styles.opacity,
            top: rect.top,
            height: rect.height,
            transform: styles.transform
          };
        })
      };

      setScrollInfo(info);
      frameId = requestAnimationFrame(checkElements);
    };

    checkElements();

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // Показываем диагностику только в dev режиме
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      fontSize: '12px',
      zIndex: 10000,
      maxWidth: '300px',
      borderRadius: '5px'
    }}>
      <div>Скролл: {scrollInfo.scrollY}</div>
      <div>Хедер: {scrollInfo.headerVisible ? '✅' : '❌'} 
           (opacity: {scrollInfo.headerOpacity}, display: {scrollInfo.headerDisplay})</div>
      <div style={{ marginTop: '10px' }}>Элементы:</div>
      {scrollInfo.elementsInfo.map((el, i) => (
        <div key={i} style={{ fontSize: '10px', margin: '2px 0' }}>
          {el.tag}: opacity={el.opacity}, top={Math.round(el.top)}px
          {el.transform !== 'none' && <span> transform: {el.transform}</span>}
        </div>
      ))}
    </div>
  );
};

export default ScrollDiagnostic; 