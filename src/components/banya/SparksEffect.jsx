import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SparksContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const SparksImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
  opacity: 0.5;
`;

const SparksEffect = ({ 
  intensity = 'medium', 
  className = '' 
}) => {
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'medium': return 0.5;
      case 'high': return 0.7;
      default: return 0.5;
    }
  };

  return (
    <SparksContainer className={className}>
      <SparksImage
        style={{ 
          opacity: getOpacity(),
          backgroundImage: `url(/src/assets/effects/banya/overlays/sparks.png)`
        }}
      />
    </SparksContainer>
  );
};

export default SparksEffect; 