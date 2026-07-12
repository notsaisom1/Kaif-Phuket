import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import BookingModal from '../booking/BookingModal';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(20, 25, 30, 0.85) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  
  @media (max-width: 768px) {
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #fafbfc 100%
  );
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 20px 40px -5px rgba(0, 0, 0, 0.15),
    0 50px 100px -20px rgba(50, 50, 93, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  -webkit-overflow-scrolling: touch;
  border: 1px solid rgba(255, 255, 255, 0.18);
  
  @media (max-width: 768px) {
    max-height: 85vh;
    border-radius: 20px;
    max-width: 90vw;
  }
  
  @media (max-width: 480px) {
    max-height: 90vh;
    border-radius: 16px;
    max-width: 95vw;
    width: 95vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &:hover {
    background: white;
    transform: scale(1.08) rotate(90deg);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.06);
  }
  
  &:active {
    transform: scale(0.95) rotate(90deg);
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: #5A6B5D;
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    top: 1.2rem;
    right: 1.2rem;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  @media (max-width: 480px) {
    width: 52px;
    height: 52px;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 1);
    
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

const ServiceHeader = styled.div`
  height: 200px;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border-radius: 24px 24px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    animation: shimmer 4s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.05),
      transparent
    );
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    height: 160px;
    font-size: 3.5rem;
    border-radius: 20px 20px 0 0;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    font-size: 3rem;
    border-radius: 16px 16px 0 0;
  }
`;

const ServiceInfo = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ServiceCategory = styled.div`
  display: inline-block;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.12) 0%,
    rgba(168, 197, 184, 0.08) 100%
  );
  color: #90B3A7;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(144, 179, 167, 0.2);
  box-shadow: 0 2px 4px rgba(144, 179, 167, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

const ServiceDescription = styled.p`
  color: #7A8A7D;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const PricingSection = styled.div`
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.06) 0%,
    rgba(168, 197, 184, 0.04) 100%
  );
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(144, 179, 167, 0.1);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    padding: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const PricingTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: #90B3A7;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 0;
  }
`;

const PriceDuration = styled.span`
  color: #5A6B5D;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #90B3A7;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    
    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

const PriceAmount = styled.span`
  color: #90B3A7;
  font-weight: 600;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SinglePrice = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #90B3A7;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BookingButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 1.1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 4px 14px rgba(144, 179, 167, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
    transform: translateY(-3px);
    box-shadow: 
      0 8px 30px rgba(144, 179, 167, 0.35),
      0 12px 40px rgba(144, 179, 167, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    
    &::before {
      transform: translate(-50%, -50%) scale(2);
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 
      0 4px 20px rgba(144, 179, 167, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.3rem 2.5rem;
    font-size: 1.2rem;
    border-radius: 18px;
    min-height: 60px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 2rem;
    font-size: 1.1rem;
    border-radius: 16px;
    min-height: 56px;
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 24px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 
    0 4px 12px rgba(232, 168, 124, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    top: 1.2rem;
    left: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.8rem;
    top: 1rem;
    left: 1rem;
  }
`;

const SpaServiceModal = ({ isOpen, onClose, service, categoryData }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Блокируем скролл body когда модальное окно открыто
  React.useEffect(() => {
    if (isOpen) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
      
      // Предотвращаем скролл на iOS
      document.body.style.touchAction = 'none';
      document.body.style.webkitOverflowScrolling = 'none';
      
      return () => {
        // Восстанавливаем скролл
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.style.touchAction = '';
        document.body.style.webkitOverflowScrolling = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!service) return null;

  const formatPrice = (service) => {
    if (service.durations && service.prices) {
      return `${Math.min(...service.prices)} - ${Math.max(...service.prices)} ฿`;
    } else if (service.priceFrom && service.priceTo) {
      return `${service.priceFrom} - ${service.priceTo} ฿`;
    } else if (service.priceFrom) {
      return `от ${service.priceFrom} ฿`;
    } else {
      return `${service.price} ฿`;
    }
  };

  const handleBooking = () => {
    setIsBookingModalOpen(true);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ opacity: 0, scale: 0.9, y: 60, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 60, rotateX: -10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <XMarkIcon />
            </CloseButton>

            <ServiceHeader bgColor={categoryData?.color}>
              {service.popular && <PopularBadge>Популярно</PopularBadge>}
              {categoryData?.icon}
            </ServiceHeader>

            <ServiceInfo>
              <ServiceCategory>{categoryData?.name}</ServiceCategory>
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>

              <PricingSection>
                <PricingTitle>
                  <CurrencyDollarIcon />
                  Стоимость услуг
                </PricingTitle>
                
                {service.durations && service.prices ? (
                  // Услуги с различными временными интервалами
                  service.durations.map((duration, index) => (
                    <PriceItem key={duration}>
                      <PriceDuration>
                        <ClockIcon />
                        {duration} минут
                      </PriceDuration>
                      <PriceAmount>{service.prices[index]} ฿</PriceAmount>
                    </PriceItem>
                  ))
                ) : (
                  // Услуги с фиксированной ценой
                  <SinglePrice>{formatPrice(service)}</SinglePrice>
                )}
              </PricingSection>

              <BookingButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBooking}
              >
                Записаться на {service.name.toLowerCase()}
              </BookingButton>
            </ServiceInfo>
          </ModalContent>

          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => {
              setIsBookingModalOpen(false);
              onClose();
            }}
            service={service?.name || 'SPA-процедура'}
            source="SPA Service Modal"
          />
        </ModalOverlay>
              )}
      </AnimatePresence>,
      document.body
    );
  };

  export default SpaServiceModal; 