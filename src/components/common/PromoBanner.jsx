import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaFire, FaTimes } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 118, 77, 0.8);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(255, 118, 77, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 118, 77, 0);
  }
`;

const TriggerButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6600 0%, #CC3300 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 102, 0, 0.5);
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;
  z-index: 98;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(255, 102, 0, 0.7);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
    right: 20px;
    bottom: 20px;
  }
`;

const BannerContainer = styled.div`
  position: fixed;
  bottom: ${({ $isVisible }) => $isVisible ? '30px' : '-200px'};
  right: 30px;
  z-index: 99;
  width: 340px;
  pointer-events: ${({ $isVisible }) => $isVisible ? 'auto' : 'none'};
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    max-width: 340px;
    right: 20px;
    bottom: ${({ $isVisible }) => $isVisible ? '20px' : '-200px'};
  }
`;

const BannerContent = styled.div`
  background: linear-gradient(135deg, #FF6600 0%, #CC3300 100%);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(255, 102, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  transform: translateY(0);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(255, 102, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    gap: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const IconWrapper = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  color: #FFD700;
  text-shadow: 0 0 12px rgba(255, 215, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const TextContent = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0;
`;

const Title = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1.3;
  margin: 0;
  flex: 1;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Проверяем, не истекла ли акция
    const endDate = new Date('2025-08-01');
    const now = new Date();
    
    if (now >= endDate) {
      setShowTrigger(false);
      return;
    }

    // Проверяем, когда последний раз закрывали баннер
    const lastClosedStr = localStorage.getItem('kaifPromoClosed');
    if (lastClosedStr) {
      const lastClosed = new Date(lastClosedStr);
      const hoursSinceClose = (now - lastClosed) / (1000 * 60 * 60);
      
      // Если прошло меньше 24 часов с момента закрытия, не показываем кнопку
      if (hoursSinceClose < 24) {
        setShowTrigger(false);
        return;
      }
    }
  }, []);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setShowTrigger(false);
    // Сохраняем время закрытия
    localStorage.setItem('kaifPromoClosed', new Date().toISOString());
  };

  // Функция для сброса состояния (для разработки)
  const resetBannerState = () => {
    localStorage.removeItem('kaifPromoClosed');
    setShowTrigger(true);
    setIsVisible(false);
  };

  return (
    <>
      {showTrigger && !isVisible && (
        <TriggerButton 
          onClick={handleOpen} 
          aria-label="Show promotion"
          title="Special offer!"
        >
          <FaFire />
        </TriggerButton>
      )}
      
      <BannerContainer $isVisible={isVisible}>
        <BannerContent>
          <Header>
            <IconWrapper onDoubleClick={resetBannerState}>
              <FaFire />
            </IconWrapper>
            <Title>{t('promo.title')}</Title>
            <CloseButton onClick={handleClose} aria-label="Close">
              <FaTimes />
            </CloseButton>
          </Header>
          <TextContent>
            <Subtitle>{t('promo.subtitle')}</Subtitle>
          </TextContent>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default PromoBanner;
