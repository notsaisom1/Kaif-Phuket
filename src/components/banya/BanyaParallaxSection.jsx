import React, { memo } from 'react';
import styled from 'styled-components';
import ParallaxBackground from '../common/ParallaxBackground';

const ParallaxContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const BanyaParallaxSection = ({ image = '/images/banya/parallax.jpg' }) => {
  return (
    <ParallaxContainer>
      <ParallaxBackground src={image} speed={0.4} />
    </ParallaxContainer>
  );
};

export default memo(BanyaParallaxSection);
