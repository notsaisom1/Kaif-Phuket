import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const BannerContainer = styled.div`
  background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #1a472a 100%);
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid #c41e3a;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 215, 0, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`;

const BannerText = styled.span`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Emoji = styled.span`
  font-size: 1.2rem;
  animation: ${twinkle} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

const GoldText = styled.span`
  color: #FFD700;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    right: 0.5rem;
  }
`;

const Garland = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  display: flex;
  justify-content: space-around;
`;

const Light = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.$color};
  box-shadow: 0 0 8px ${props => props.$color}, 0 0 12px ${props => props.$color};
  animation: ${twinkle} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const HolidayBanner = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const lightColors = ['#ff0000', '#00ff00', '#FFD700', '#ff0000', '#00ff00', '#FFD700', '#ff0000', '#00ff00'];

  const getMessage = () => {
    const lang = i18n.language;
    if (lang === 'ru') {
      return { greeting: 'С Новым 2025 Годом!', wish: 'Желаем радости и здоровья!' };
    } else if (lang === 'th') {
      return { greeting: 'สวัสดีปีใหม่ 2025!', wish: 'ขอให้มีความสุขและสุขภาพดี!' };
    }
    return { greeting: 'Happy New Year 2025!', wish: 'Wishing you joy and health!' };
  };

  const message = getMessage();

  return (
    <BannerContainer>
      <BannerContent>
        <Emoji $delay={0}>🎄</Emoji>
        <BannerText>
          <GoldText>{message.greeting}</GoldText> {message.wish}
        </BannerText>
        <Emoji $delay={0.5}>✨</Emoji>
        <Emoji $delay={1}>🎁</Emoji>
      </BannerContent>
      <CloseButton onClick={() => setIsVisible(false)} aria-label="Close banner">
        ×
      </CloseButton>
      <Garland>
        {lightColors.map((color, i) => (
          <Light
            key={i}
            $color={color}
            $duration={1 + Math.random()}
            $delay={i * 0.2}
          />
        ))}
      </Garland>
    </BannerContainer>
  );
};

export default HolidayBanner;
