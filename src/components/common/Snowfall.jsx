import React, { useEffect, useState, memo } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Ultra-lightweight animation
const fall = keyframes`
  from { transform: translateY(-5vh); }
  to { transform: translateY(105vh); }
`;

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
  contain: strict;

  /* Disable on reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const Snowflake = styled.div`
  position: absolute;
  top: -20px;
  color: white;
  font-size: ${props => props.$size}px;
  opacity: ${props => props.$opacity};
  left: ${props => props.$left}%;
  animation: ${fall} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  will-change: transform;
`;

const Snowfall = memo(() => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    // Detect low performance devices
    const isLowEnd = navigator.hardwareConcurrency <= 4 ||
                     /Android|iPhone|iPad/i.test(navigator.userAgent);
    const isMobile = window.innerWidth < 768;

    setIsLowPerf(isLowEnd);

    const flakes = [];
    // More snow: 15 mobile, 35 desktop, 20 low-end desktop
    const flakeCount = isMobile ? 15 : (isLowEnd ? 20 : 35);

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        left: (i / flakeCount) * 100 + (i % 7) - 3,
        size: 10 + (i % 4) * 3,
        duration: 12 + (i % 6) * 2,
        delay: (i % 10) * 1.2,
        opacity: 0.4 + (i % 4) * 0.12,
      });
    }
    setSnowflakes(flakes);
  }, []);

  // Don't render on very low-end devices
  if (isLowPerf && navigator.hardwareConcurrency <= 2) {
    return null;
  }

  return (
    <SnowContainer>
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          $left={flake.left}
          $size={flake.size}
          $duration={flake.duration}
          $delay={flake.delay}
          $opacity={flake.opacity}
        >
          ❄
        </Snowflake>
      ))}
    </SnowContainer>
  );
});

Snowfall.displayName = 'Snowfall';

export default Snowfall;
