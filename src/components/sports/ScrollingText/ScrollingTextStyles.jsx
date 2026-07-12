import styled from 'styled-components';

export const ScrollingTextSection = styled.section`
  position: relative;
  width: 100%;
  background: #000000;
  overflow-x: hidden;
  overflow-y: visible;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0;

  @media (max-width: 768px) {
    overflow: visible !important;
    padding: 0.5rem 0;
    margin: 0;
  }
`;

export const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ScrollingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0;
  }
`;

export const TextLine = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: visible;
  width: 200%;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.scroll-left {
    animation: scrollLeft 30s linear infinite;
  }

  &.scroll-right {
    animation: scrollRight 30s linear infinite;
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

export const AnimatedText = styled.span`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(5rem, 10vw, 12rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  transform: translateZ(0);
  color: #FFE600;

  @media (max-width: 1024px) {
    font-size: clamp(4rem, 9vw, 9rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(4.5rem, 16vw, 7rem);
  }
`;
