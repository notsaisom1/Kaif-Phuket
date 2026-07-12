import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Заголовок с градиентом из цветов логотипа
const StyledHeading = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || 'Playfair Display, serif'};
  font-size: ${({ size }) => size || '2.5rem'};
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: ${({ mobileSize }) => mobileSize || '1.75rem'};
  }
`;

const LogoGradientHeading = ({ children, size, mobileSize, ...props }) => {
  return (
    <StyledHeading
      size={size}
      mobileSize={mobileSize}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

export default LogoGradientHeading;
