import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Декоративный разделитель с градиентом из цветов логотипа
const StyledDivider = styled(motion.div)`
  height: 4px;
  width: ${({ width }) => width || '80px'};
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  border-radius: 2px;
  margin: ${({ margin }) => margin || '1rem 0'};
`;

const LogoGradientDivider = ({ width, margin, ...props }) => {
  return (
    <StyledDivider
      width={width}
      margin={margin}
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: width || '80px', opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    />
  );
};

export default LogoGradientDivider;
