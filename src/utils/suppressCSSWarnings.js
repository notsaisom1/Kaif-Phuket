// Утилита для подавления CSS предупреждений в развитии
// Это временное решение для предупреждений о медиа-запросах в styled-components

// Подавляем консольные предупреждения о CSS в development режиме
if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  const originalError = console.error;
  
  console.warn = (...args) => {
    const message = args.join(' ');
    
    // Фильтруем известные несущественные предупреждения
    if (
      message.includes('Unsupported style property @media') ||
      message.includes('Did you mean @media (maxWidth:') ||
      message.includes('styled-components:') && message.includes('@media')
    ) {
      return; // Игнорируем эти предупреждения
    }
    
    originalWarn.apply(console, args);
  };
  
  console.error = (...args) => {
    const message = args.join(' ');
    
    // Фильтруем некритичные ошибки CSS
    if (
      message.includes('Unsupported style property @media') ||
      message.includes('styled-components') && message.includes('media query')
    ) {
      return; // Игнорируем эти ошибки
    }
    
    originalError.apply(console, args);
  };
}

export default {}; 