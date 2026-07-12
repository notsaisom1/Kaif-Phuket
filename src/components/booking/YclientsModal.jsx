import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

// =============================================================================
// МОДАЛЬНОЕ ОКНО ДЛЯ YCLIENTS ВИДЖЕТА
// =============================================================================

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(20, 25, 30, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
`;

const ModalContainer = styled(motion.div)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 252, 252, 1) 100%
  );
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 20px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 2rem;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
  background: linear-gradient(
    135deg,
    #90B3A7 0%,
    #A8C5B8 50%,
    #B0D4C1 100%
  );
  color: white;
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.08) rotate(90deg);
    border-color: rgba(255, 255, 255, 0.4);
    
    &::before {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
  
  &:active {
    transform: scale(0.95) rotate(90deg);
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: white;
    position: relative;
    z-index: 1;
  }
`;

const ModalContent = styled.div`
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
`;

const YclientsIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.1rem;
  color: #64748b;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.03) 0%,
    rgba(168, 197, 184, 0.05) 100%
  );
  
  p {
    font-weight: 500;
    color: #5A6B5D;
  }
  
  ol {
    margin-top: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
      color: #7A8A7D;
      
      &::marker {
        color: #90B3A7;
        font-weight: 600;
      }
    }
  }
`;

// =============================================================================
// YCLIENTS MODAL COMPONENT
// =============================================================================

const YclientsModal = ({ 
  isOpen, 
  onClose, 
  companyId = null, // ID компании в Yclients
  customUrl = null // Кастомная ссылка на запись
}) => {
  // Формируем URL для виджета Yclients
  const getBookingUrl = () => {
    if (customUrl) {
      return customUrl;
    }
    
    if (companyId) {
      return `https://n${companyId}.yclients.com/`;
    }
    
    // Fallback - пример URL (нужно заменить на реальный)
    return 'https://example.yclients.com/';
  };

  // Закрытие по Escape
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.85, y: 40, rotateX: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40, rotateX: -5 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.32, 0.72, 0, 1],
              opacity: { duration: 0.25 }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>Онлайн-запись в KAIF SPA</ModalTitle>
              <CloseButton onClick={onClose}>
                <XMarkIcon />
              </CloseButton>
            </ModalHeader>
            
            <ModalContent>
              {companyId || customUrl ? (
                <YclientsIframe
                  src={getBookingUrl()}
                  title="Онлайн-запись Yclients"
                  allow="camera; microphone; geolocation"
                />
              ) : (
                <LoadingContainer>
                  <div>
                    <p>Для настройки онлайн-записи нужно:</p>
                    <ol style={{ textAlign: 'left', marginTop: '1rem' }}>
                      <li>ID компании в Yclients</li>
                      <li>Или прямая ссылка на виджет записи</li>
                    </ol>
                  </div>
                </LoadingContainer>
              )}
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default YclientsModal; 