import styled from 'styled-components';
import { motion } from 'framer-motion';

// Стили для слайдера
export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto 0;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: var(--shadow-wellness-lg);
  
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem auto 0;
    border-radius: 12px;
  }
`;

export const SlidesTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Slide = styled(motion.div)`
  flex-shrink: 0;
  width: 100%;
  height: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    transition: all 0.3s ease;
    
    @media (max-width: 480px) {
      padding: 1.5rem;
    }
  }
  
  .slide-title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .slide-subtitle {
    font-size: 1rem;
    opacity: 0.9;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  color: var(--color-text-primary);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 15px;
  }
`;

export const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--color-primary)' : 'rgba(144, 179, 167, 0.3)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--color-primary)' : 'rgba(144, 179, 167, 0.5)'};
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

// Сохраняем оригинальные компоненты для обратной совместимости
export const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const PhotoCard = styled(motion.div)`
  height: 280px;
  background-color: var(--color-surface);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-wellness);
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-wellness-lg);
    
    img {
      transform: scale(1.05);
    }
    
    .photo-overlay {
      padding-bottom: 2rem;
    }
  }
  
  .photo-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .photo-subtitle {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

// Заглушка для фотографий
export const PhotoPlaceholder = styled(motion.div)`
  height: 280px;
  background-color: var(--color-secondary);
  background-opacity: 0.1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;
