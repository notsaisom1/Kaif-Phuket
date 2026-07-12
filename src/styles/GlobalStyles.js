/* Мобильные улучшения */
@media (max-width: 768px) {
  /* Улучшенная прокрутка */
  * {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  
  /* Оптимизация для touch */
  button, a, [role="button"] {
    min-height: 44px;
    min-width: 44px;
    touch-action: manipulation;
  }
  
  /* Улучшенные переходы */
  * {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Премиальные тени для мобильных */
  .mobile-shadow {
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  /* Градиентные фоны */
  .mobile-gradient {
    background: linear-gradient(135deg, 
      rgba(144, 179, 167, 0.1) 0%, 
      rgba(168, 197, 184, 0.05) 100%);
  }
  
  /* Улучшенный blur эффект */
  .mobile-blur {
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }
  
  /* Стили для кнопки сортировки на мобильных */
  .sort-dropdown-mobile {
    width: 100% !important;
    max-width: 100% !important;
    min-width: auto !important;
    z-index: 5000 !important;
    position: relative !important;
  }
  
  .sort-dropdown-mobile button {
    width: 100% !important;
    justify-content: center !important;
    text-align: center !important;
    z-index: 5000 !important;
    position: relative !important;
    align-items: center !important;
    line-height: 1 !important;
  }
  
  /* Исправление выравнивания текста */
  .sort-dropdown-mobile span,
  .sort-dropdown-list span {
    display: flex !important;
    align-items: center !important;
    line-height: 1.2 !important;
  }
}

@media (max-width: 480px) {
  /* Еще более агрессивные оптимизации для маленьких экранов */
  body {
    font-size: 16px; /* Предотвращает zoom на iOS */
  }
  
  /* Улучшенные анимации */
  @keyframes mobileSlideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes mobileSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .mobile-slide-up {
    animation: mobileSlideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .mobile-slide-in {
    animation: mobileSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Премиальные эффекты для маленьких экранов */
  .mobile-premium-shadow {
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.18),
      0 12px 30px rgba(0, 0, 0, 0.12),
      0 4px 12px rgba(144, 179, 167, 0.1);
  }
  
  /* Специальные стили для кнопки сортировки на маленьких экранах */
  .sort-section-mobile {
    padding: 0 1rem !important;
    margin-top: 2rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .sort-dropdown-small {
    font-size: 12px !important;
    padding: 8px 12px !important;
    min-height: 36px !important;
    line-height: 1.2 !important;
    display: flex !important;
    align-items: center !important;
  }
  
  .sort-dropdown-small svg {
    width: 14px !important;
    height: 14px !important;
  }
  
  /* Выпадающий список всегда поверх всех элементов */
  .sort-dropdown-list {
    z-index: 5500 !important;
    position: absolute !important;
  }
  
  /* Контейнер сортировки должен быть выше карточек */
  .sort-container {
    z-index: 5100 !important;
    position: relative !important;
  }
  
  /* Карточки товаров должны быть ниже */
  .menu-item-card {
    z-index: 1 !important;
    position: relative !important;
  }
} 