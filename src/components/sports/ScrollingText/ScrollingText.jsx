import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ScrollingSection = styled.section`
  position: relative;
  width: 100%;
  background-color: #fffef6;
  overflow: hidden;
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const ScrollingContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ScrollingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TextLine = styled.div`
  display: flex;
  white-space: nowrap;
  width: 200%;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.scroll-left {
    animation: scrollLeft 35s linear infinite;
  }

  &.scroll-right {
    animation: scrollRight 35s linear infinite;
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0) translateZ(0); }
    100% { transform: translateX(-50%) translateZ(0); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-50%) translateZ(0); }
    100% { transform: translateX(0) translateZ(0); }
  }
`;

const AnimatedText = styled.span`
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  display: inline-block;
  transform: translateZ(0);
  color: rgba(19, 50, 56, 0.06);

  @media (max-width: 768px) {
    font-size: clamp(3rem, 14vw, 5rem);
  }
`;

const ScrollingText = () => {
  const { t } = useTranslation();

  const line1 = `${t('sports.scrolling.text1', 'BE STRONG')}. ${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. `;
  const line2 = `${t('sports.scrolling.text2', 'BE CONFIDENT')}. ${t('sports.scrolling.text3', 'BE UNSTOPPABLE')}. ${t('sports.scrolling.text4', 'BE MORE HUMAN')}. `;

  return (
    <ScrollingSection>
      <ScrollingContainer>
        <ScrollingWrapper>
          <TextLine className="scroll-left">
            <AnimatedText>{line1}{line1}{line1}</AnimatedText>
            <AnimatedText>{line1}{line1}{line1}</AnimatedText>
          </TextLine>
          <TextLine className="scroll-right">
            <AnimatedText>{line2}{line2}{line2}</AnimatedText>
            <AnimatedText>{line2}{line2}{line2}</AnimatedText>
          </TextLine>
        </ScrollingWrapper>
      </ScrollingContainer>
    </ScrollingSection>
  );
};

export default ScrollingText;
