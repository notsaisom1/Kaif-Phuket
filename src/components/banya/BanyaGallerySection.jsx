import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// === STYLED COMPONENTS — Minimalist Pasture Style ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`;

const Subtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 280px;

  @media (min-width: 768px) {
    height: auto;

    &:nth-child(1) {
      grid-row: span 2;
    }
    &:nth-child(4) {
      grid-row: span 2;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  color: #fff;
`;

const CaptionTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`;

/* Lightbox modal */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImageWrapper = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  display: block;
`;

const ModalInfo = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ModalCounter = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
`;

const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 10;
  font-size: 1.25rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev { left: -5rem; }
  &.next { right: -5rem; }

  @media (max-width: 768px) {
    &.prev { left: -0.5rem; }
    &.next { right: -0.5rem; }
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 10001;
  font-size: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// === COMPONENT ===

const BanyaGallerySection = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: '/images/banya/gallery/banya-steam-room.jpg',
      title: t('banya.gallery.steam_room', 'Steam Room')
    },
    {
      id: 2,
      src: '/images/banya/gallery/banya-rest-area.jpg',
      title: t('banya.gallery.rest_area', 'Rest Area')
    },
    {
      id: 3,
      src: '/images/banya/gallery/banya-cold-pool.jpg',
      title: t('banya.gallery.cold_pool', 'Cold Pool')
    },
    {
      id: 4,
      src: '/images/banya/gallery/banya-hot-stones.jpg',
      title: t('banya.gallery.hot_stones', 'Hot Stones')
    },
    {
      id: 5,
      src: '/images/banya/gallery/banya-tea-ceremony.jpg',
      title: t('banya.gallery.tea_ceremony', 'Tea Ceremony')
    },
    {
      id: 6,
      src: '/images/banya/gallery/banya-lounge.jpg',
      title: t('banya.gallery.lounge', 'Lounge')
    }
  ];

  const openModal = useCallback((index) => {
    setModalIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateModal = useCallback((direction) => {
    setModalIndex(prev => {
      if (direction === 'next') return (prev + 1) % galleryImages.length;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  }, [galleryImages.length]);

  // Гарантируем восстановление скролла при размонтировании
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModal('prev');
      if (e.key === 'ArrowRight') navigateModal('next');
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen, closeModal, navigateModal]);

  return (
    <SectionContainer id="banya-gallery">
      <ContentWrapper>
        <Overline>{t('banya.gallery.badge', 'Gallery')}</Overline>
        <Title>{t('banya.gallery.title', 'Gallery')}</Title>
        <Subtitle>
          {t('banya.gallery.subtitle', 'The atmosphere of an authentic Russian banya')}
        </Subtitle>

        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} onClick={() => openModal(index)}>
              <GalleryImage
                src={image.src}
                alt={image.title}
                loading="lazy"
              />
              <ImageCaption>
                <CaptionTitle>{image.title}</CaptionTitle>
              </ImageCaption>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </ContentWrapper>

      {/* Lightbox Modal */}
      {modalOpen && galleryImages[modalIndex] && (
        <ModalOverlay onClick={closeModal}>
          <CloseButton onClick={closeModal}>&#x2715;</CloseButton>

          <ModalImageWrapper onClick={(e) => e.stopPropagation()}>
            {galleryImages.length > 1 && (
              <ModalNavButton className="prev" onClick={() => navigateModal('prev')}>
                &#x2039;
              </ModalNavButton>
            )}

            <ModalImage
              src={galleryImages[modalIndex].src}
              alt={galleryImages[modalIndex].title}
            />

            {galleryImages.length > 1 && (
              <ModalNavButton className="next" onClick={() => navigateModal('next')}>
                &#x203A;
              </ModalNavButton>
            )}

            <ModalInfo>
              <ModalTitle>{galleryImages[modalIndex].title}</ModalTitle>
              <ModalCounter>{modalIndex + 1} / {galleryImages.length}</ModalCounter>
            </ModalInfo>
          </ModalImageWrapper>
        </ModalOverlay>
      )}
    </SectionContainer>
  );
};

export default BanyaGallerySection;
