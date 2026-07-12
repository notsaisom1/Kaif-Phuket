import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Кнопка с градиентом из цветов логотипа
const StyledButton = styled(motion.button)`
  position: relative;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Playfair Display, serif'};
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const LogoGradientButton = ({ children, onClick, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default LogoGradientButton;
