import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ParallaxBackground from '../common/ParallaxBackground';

const ParallaxContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
`;

const TextOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  pointer-events: none;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 9vw, 3.5rem);
  }
`;

const ComplexParallax = () => {
  const { t } = useTranslation();

  return (
    <ParallaxContainer>
      <ParallaxBackground
        src="/images/home/parallax.jpg"
        speed={0.4}
        overlay={<Overlay />}
      />
      <TextOverlay>
        <Title>{t('home.parallax.title', 'Where Time Stands Still')}</Title>
      </TextOverlay>
    </ParallaxContainer>
  );
};

export default memo(ComplexParallax);
