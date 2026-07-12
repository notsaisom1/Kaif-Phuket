import React, { useEffect, useRef, memo, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Cloudinary video URLs - optimized for streaming
const VIDEO_DESKTOP = 'https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_60,br_3000k/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.mp4';
const VIDEO_MOBILE = 'https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_50,w_720,br_1500k/d1d565d2-6755-4365-94ad-3e33b179e8bd_yjxf5i.mp4';
const POSTER_URL = 'https://res.cloudinary.com/dgkymvotb/video/upload/q_auto,w_1920,c_fill,so_0,f_auto/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.jpg';
const POSTER_MOBILE_URL = 'https://res.cloudinary.com/dgkymvotb/video/upload/q_auto,w_768,c_fill,so_0,f_auto/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.jpg';

// Синхронное определение мобильного до первого рендера —
// иначе браузер сначала качает desktop-видео, потом mobile (двойная загрузка).
const detectMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 768px)').matches;
};

// Основной контейнер - с poster фоном чтобы не было черного экрана
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`;

// Видео-фон
const VideoBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }

  /* Затемнение поверх видео */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none; /* Пропускает клики к видео */
  }
`;

// Невидимая кнопка для запуска видео на iOS
const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
`;

// Контейнер контента
const ContentContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroWord = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 20vw, 7rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3.5rem, 22vw, 6rem);
  }
`;

const LocationText = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`;

const HeroFullscreen = memo(() => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile] = useState(detectMobile);

  // Функция запуска видео
  const playVideo = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.muted = true;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  // Autoplay видео
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Устанавливаем атрибуты для iOS
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    const tryPlay = () => {
      if (video.paused) {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    // Когда видео начинает играть
    video.addEventListener('playing', () => setIsPlaying(true));

    // События видео
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);

    // Пробуем запустить сразу
    tryPlay();

    // Повторные попытки
    const timeouts = [100, 500, 1000].map(ms => setTimeout(tryPlay, ms));

    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('playing', () => setIsPlaying(true));
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <HeroContainer>
      <VideoBackground>
        <video
          ref={videoRef}
          src={isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={isMobile ? POSTER_MOBILE_URL : POSTER_URL}
          onClick={playVideo}
        />
      </VideoBackground>

      {/* Невидимый overlay для тапа на iOS */}
      {!isPlaying && <PlayOverlay onClick={playVideo} />}

      <ContentContainer>
        <ContentWrapper>
          <HeroTextBlock>
            <HeroWord>{t('home.hero.word1')}</HeroWord>
            <HeroWord>{t('home.hero.word2')}</HeroWord>
            <HeroWord>{t('home.hero.word3')}</HeroWord>
            <LocationText>{t('home.hero.location')}</LocationText>
          </HeroTextBlock>
        </ContentWrapper>
      </ContentContainer>
    </HeroContainer>
  );
});

HeroFullscreen.displayName = 'HeroFullscreen';

export default HeroFullscreen;
