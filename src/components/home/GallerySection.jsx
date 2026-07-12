import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fffe 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(144, 179, 167, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Заголовок секции
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -60px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #90B3A7);
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, #90B3A7, transparent);
  }
`;

// Основной заголовок секции
const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 400;
  background: linear-gradient(135deg, #2C3E2D 0%, #1a2e1b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    border-radius: 2px;
  }
`;

// Подзаголовок
const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #5A6B5D;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  font-weight: 400;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

// Фильтр галереи
const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
`;

// Кнопка фильтра
const FilterButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  min-width: 120px;
  text-align: center;
  
  /* Неактивное состояние */
  background: ${({ active }) => active 
    ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' 
    : 'rgba(255, 255, 255, 0.9)'};
  color: ${({ active }) => active ? 'white' : '#5A6B5D'};
  box-shadow: ${({ active }) => active 
    ? '0 6px 20px rgba(144, 179, 167, 0.3)' 
    : '0 3px 12px rgba(0, 0, 0, 0.08)'};
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.03);
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.5);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.8rem;
    font-size: 0.75rem;
    min-width: 110px;
    border-radius: 14px;
    backdrop-filter: blur(12px);
    
    &:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 30px rgba(144, 179, 167, 0.6);
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.7rem;
    min-width: 100px;
    border-radius: 12px;
    backdrop-filter: blur(15px);
    
    &:hover {
      transform: translateY(-3px) scale(1.06);
      box-shadow: 0 12px 35px rgba(144, 179, 167, 0.7);
    }
    
    ${({ active }) => active ? `
      box-shadow: 0 8px 25px rgba(144, 179, 167, 0.5);
    ` : `
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.12);
    `}
  }
`;

// Контейнер слайдера
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 8px 25px rgba(0, 0, 0, 0.08);
    
  @media (max-width: 768px) {
    border-radius: 20px;
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.15),
      0 12px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    border-radius: 16px;
    margin: 0 -1rem;
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.18),
      0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

// Трек слайдера
const SliderTrack = styled(motion.div)`
  display: flex;
  width: 100%;
`;

// Слайд
const Slide = styled(motion.div)`
  flex-shrink: 0;
  width: 100%;
  height: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 280px;
  }
`;

// Изображение слайда
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  loading: lazy;
  
  &:hover {
    transform: scale(1.02);
  }
`;

// Оверлей слайда
const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 4rem;
  background: linear-gradient(to top, 
    rgba(0,0,0,0.9) 0%, 
    rgba(0,0,0,0.6) 40%, 
    rgba(0,0,0,0.2) 70%, 
    rgba(0,0,0,0) 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 2.5rem;
    background: linear-gradient(to top, 
      rgba(0,0,0,0.95) 0%, 
      rgba(0,0,0,0.7) 35%, 
      rgba(0,0,0,0.3) 65%, 
      rgba(0,0,0,0) 100%);
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 2rem;
    background: linear-gradient(to top, 
      rgba(0,0,0,0.98) 0%, 
      rgba(0,0,0,0.8) 30%, 
      rgba(0,0,0,0.4) 60%, 
      rgba(0,0,0,0) 100%);
    border-radius: 0 0 16px 16px;
  }
`;

// Заголовок слайда
const SlideTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Описание слайда
const SlideDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  opacity: 0.95;
  line-height: 1.7;
  max-width: 600px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// Кнопки навигации слайдера
const SliderButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  color: #2C3E2D;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  z-index: 10;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(144, 179, 167, 0.95);
    color: white;
    border-color: rgba(144, 179, 167, 0.5);
    box-shadow: 0 12px 35px rgba(144, 179, 167, 0.3);
  }
  
  &.prev {
    left: 1.5rem;
  }
  
  &.next {
    right: 1.5rem;
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    
    &.prev {
      left: 1rem;
    }
    
    &.next {
      right: 1rem;
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 2.75rem;
    height: 2.75rem;
    
    &.prev {
      left: 0.75rem;
    }
    
    &.next {
      right: 0.75rem;
    }
    
    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;

// Индикаторы слайдера
const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.75rem;
    gap: 10px;
  }
`;

const SliderDot = styled(motion.button)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 
    'rgba(144, 179, 167, 0.25)'};
  border: 2px solid ${props => props.active ? '#90B3A7' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(144, 179, 167, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 
      'rgba(144, 179, 167, 0.5)'};
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    
    &::before {
      width: 40px;
      height: 40px;
    }
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    
    &::before {
      width: 44px;
      height: 44px;
    }
  }
`;

// Модальное окно для просмотра изображения
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  border-radius: 12px;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
`;

const ModalInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  color: white;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: 'Inter', sans-serif;
    opacity: 0.9;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const GallerySection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Создаем функцию для получения оптимизированных URL изображений
  const getOptimizedImageUrl = (baseUrl, isMobile = false) => {
    const width = isMobile ? 600 : 800;
    const quality = isMobile ? 60 : 70;
    return baseUrl.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, `q=${quality}`);
  };

  // Определяем, мобильное ли устройство
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Оптимизированные данные галереи с адаптивными изображениями
  const galleryData = [
    // СПА
    {
      id: 1,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Тайский массаж',
      category: 'spa',
      description: 'Традиционный тайский массаж в исполнении опытных мастеров'
    },
    {
      id: 2,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Ароматерапия',
      category: 'spa',
      description: 'Расслабляющие процедуры с натуральными эфирными маслами'
    },
    {
      id: 3,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Сауна и хаммам',
      category: 'spa',
      description: 'Самая большая сауна в Таиланде - 150м²'
    },
    // Фитнес
    {
      id: 4,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Тренажерный зал',
      category: 'fitness',
      description: 'Более 70 современных тренажеров премиум-класса'
    },
    {
      id: 5,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Персональные тренировки',
      category: 'fitness',
      description: 'Индивидуальные программы с сертифицированными тренерами'
    },
    // Бассейны (сократили количество)
    {
      id: 6,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Олимпийский бассейн',
      category: 'pool',
      description: '25-метровый бассейн с подогревом воды'
    },
    // Релаксация (сократили количество)
    {
      id: 7,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Ресторан',
      category: 'relax',
      description: 'Ресторан на 200 мест с восточной и русской кухней'
    },
    {
      id: 8,
      image: getOptimizedImageUrl('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70', isMobile),
      title: 'Салон красоты',
      category: 'relax',
      description: 'Косметология и премиальные уходовые процедуры'
    }
  ];

  // Фильтры
  const filters = [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'spa', label: t('gallery.filters.spa') },
    { id: 'fitness', label: t('gallery.filters.fitness') },
    { id: 'pool', label: t('gallery.filters.pool') },
    { id: 'relax', label: t('gallery.filters.relax') }
  ];

  // Фильтрация данных
  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  // Автоматическое переключение слайдов (отключено на мобильных)
  useEffect(() => {
    // Отключаем автоплей на мобильных устройствах для экономии ресурсов
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % filteredGallery.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [filteredGallery.length]);

  // Сброс слайда при смене фильтра
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  // Предзагрузка следующего изображения для улучшения производительности
  useEffect(() => {
    if (filteredGallery.length > 1) {
      const nextIndex = (currentSlide + 1) % filteredGallery.length;
      const nextImage = new Image();
      nextImage.src = filteredGallery[nextIndex]?.image;
    }
  }, [currentSlide, filteredGallery]);

  // Навигация слайдера с debounce
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % filteredGallery.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + filteredGallery.length) % filteredGallery.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Открытие модального окна
  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <SectionContainer id="gallery">
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('gallery.overline')}
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('gallery.title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('gallery.subtitle')}
          </SectionSubtitle>
        </SectionHeader>
        
        <FilterBar
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterBar>
        
        {filteredGallery.length > 0 && (
                      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <SliderContainer>
              <SliderTrack
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
              >
                {filteredGallery.map((item, index) => (
                  <Slide key={item.id}>
                    <SlideImage 
                      src={item.image} 
                      alt={item.title}
                      onClick={() => openModal(item)}
                      style={{ cursor: 'pointer' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <SlideOverlay>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <SlideTitle>{item.title}</SlideTitle>
                        <SlideDescription>{item.description}</SlideDescription>
                      </motion.div>
                    </SlideOverlay>
                  </Slide>
                ))}
              </SliderTrack>
              
              {filteredGallery.length > 1 && (
                <>
                  <SliderButton 
                    className="prev" 
                    onClick={prevSlide}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <ChevronLeftIcon width={24} height={24} />
                  </SliderButton>
                  
                  <SliderButton 
                    className="next" 
                    onClick={nextSlide}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <ChevronRightIcon width={24} height={24} />
                  </SliderButton>
                </>
              )}
            </SliderContainer>
            
            {filteredGallery.length > 1 && (
              <SliderDots>
                {filteredGallery.map((_, index) => (
                  <SliderDot 
                    key={index} 
                    active={index === currentSlide}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.4 + index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  />
                ))}
              </SliderDots>
            )}
          </motion.div>
        )}
      </ContentWrapper>
      
      <AnimatePresence>
        {selectedImage && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <ModalContainer
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
            >
              <ModalImage 
                src={selectedImage.image} 
                alt={selectedImage.title} 
              />
              <ModalInfo>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </motion.div>
              </ModalInfo>
              <CloseButton 
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <XMarkIcon width={24} height={24} />
              </CloseButton>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default GallerySection;
