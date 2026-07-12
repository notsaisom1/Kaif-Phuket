import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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

/* Filter pills */
const FilterBar = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button`
  font-family: 'Jost', sans-serif;
  padding: 0.6rem 1.25rem;
  background: ${props => props.$active ? '#133238' : 'transparent'};
  color: ${props => props.$active ? '#fffef6' : 'rgba(19, 50, 56, 0.5)'};
  border: 1px solid ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.15)'};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: ${props => props.$active ? '500' : '400'};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: ${props => props.$active ? '#fffef6' : '#133238'};
    border-color: ${props => props.$active ? '#133238' : 'rgba(19, 50, 56, 0.4)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

/* Asymmetric gallery grid */
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
    gap: 1.25rem;
  }
`;

/* Keyframes for fade-in animation */
const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

// Inject keyframes
if (typeof document !== 'undefined' && !document.getElementById('gallery-animations')) {
  const style = document.createElement('style');
  style.id = 'gallery-animations';
  style.textContent = fadeInUp;
  document.head.appendChild(style);
}

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 260px;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};
  opacity: 0;

  @media (min-width: 768px) {
    height: auto;

    /* Asymmetric layout: 1st and 5th items span 2 rows */
    &:nth-child(1),
    &:nth-child(5) {
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
  object-position: ${props => props.$position || 'center'};
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
  opacity: ${props => props.$visible ? '1' : '0'};
  transition: opacity 0.3s ease;
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

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev { left: -5rem; }
  &.next { right: -5rem; }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

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
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// === COMPONENT ===

const GallerySection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const galleryData = useMemo(() => [
    // === ALL (первые 10 — видны в "All") ===
    {
      id: 1,
      image: '/images/spa/services/thai-massage.jpg',
      title: t('gallery.slides.thai_massage.title', 'Thai Massage'),
      category: 'spa',
      position: 'center bottom'
    },
    {
      id: 2,
      image: '/images/banya/gallery/banya-steam-room.jpg',
      title: t('gallery.slides.banya.title', 'Russian Banya'),
      category: 'banya'
    },
    {
      id: 3,
      image: '/images/sports/fight-club/fight-1.jpg',
      title: t('gallery.slides.combat.title', 'Fight Club'),
      category: 'fitness',
      position: 'center top'
    },
    {
      id: 4,
      image: '/images/zones/pool.jpg',
      title: t('gallery.slides.pool.title', 'Pool'),
      category: 'relax'
    },
    {
      id: 5,
      image: '/images/home/terrace.jpg',
      title: t('gallery.slides.terrace.title', 'Rooftop Terrace'),
      category: 'relax'
    },
    {
      id: 6,
      image: '/images/spa/gallery/spa-5.jpg',
      title: t('gallery.slides.spa_room.title', 'Spa Suite'),
      category: 'spa'
    },
    {
      id: 7,
      image: '/images/sports/gym/gym-1.jpg',
      title: t('gallery.slides.gym.title', 'Gym'),
      category: 'fitness'
    },
    {
      id: 8,
      image: '/images/banya/gallery/banya-cold-pool.jpg',
      title: t('gallery.slides.cold_pool.title', 'Ice Pool'),
      category: 'banya'
    },
    {
      id: 9,
      image: '/images/spa/services/aromatherapy.jpg',
      title: t('gallery.slides.aromatherapy.title', 'Aromatherapy'),
      category: 'spa'
    },
    {
      id: 10,
      image: '/images/banya/gallery/banya-rest-area.jpg',
      title: t('gallery.slides.rest_area.title', 'Rest Area'),
      category: 'banya'
    },
    // === Дополнительные для категорий ===
    // SPA +4
    {
      id: 11,
      image: '/images/spa/gallery/spa-1.jpg',
      title: t('gallery.slides.spa_interior.title', 'Spa Interior'),
      category: 'spa'
    },
    {
      id: 12,
      image: '/images/spa/services/massage.jpg',
      title: t('gallery.slides.massage.title', 'Massage'),
      category: 'spa'
    },
    {
      id: 21,
      image: '/images/spa/gallery/spa-2.jpg',
      title: t('gallery.slides.spa_treatment.title', 'Spa Treatment'),
      category: 'spa'
    },
    {
      id: 22,
      image: '/images/spa/gallery/spa-3.jpg',
      title: t('gallery.slides.relaxation.title', 'Relaxation'),
      category: 'spa'
    },
    // FITNESS +2
    {
      id: 13,
      image: '/images/sports/gym/gym-2.jpg',
      title: t('gallery.slides.gym_equipment.title', 'Gym Equipment'),
      category: 'fitness'
    },
    {
      id: 14,
      image: '/images/sports/fight-club/fight-2.jpg',
      title: t('gallery.slides.boxing.title', 'Boxing Ring'),
      category: 'fitness'
    },
    // BANYA +4
    {
      id: 15,
      image: '/images/banya/gallery/banya-hot-stones.jpg',
      title: t('gallery.slides.hot_stones.title', 'Hot Stones'),
      category: 'banya'
    },
    {
      id: 16,
      image: '/images/banya/gallery/banya-tea-ceremony.jpg',
      title: t('gallery.slides.tea_ceremony.title', 'Tea Ceremony'),
      category: 'banya'
    },
    {
      id: 19,
      image: '/images/banya/gallery/banya-lounge.jpg',
      title: t('gallery.slides.banya_lounge.title', 'Lounge Zone'),
      category: 'banya'
    },
    {
      id: 20,
      image: '/images/banya/gallery/banya-steam-room1.jpg',
      title: t('gallery.slides.steam_ritual.title', 'Steam Ritual'),
      category: 'banya'
    },
    // RELAX +2
    {
      id: 17,
      image: '/images/restaurant/restaurant.jpg',
      title: t('gallery.slides.restaurant.title', 'Restaurant'),
      category: 'relax'
    },
    {
      id: 18,
      image: '/images/beauty/services/facial.jpg',
      title: t('gallery.slides.smoking_area.title', 'Smoking Area'),
      category: 'relax'
    }
  ], [t]);

  const filters = useMemo(() => [
    { id: 'all', label: t('gallery.filters.all', 'All') },
    { id: 'spa', label: t('gallery.filters.spa', 'Spa') },
    { id: 'fitness', label: t('gallery.filters.fitness', 'Fitness') },
    { id: 'banya', label: t('gallery.filters.banya', 'Banya') },
    { id: 'relax', label: t('gallery.filters.relax', 'Relax') }
  ], [t]);

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'all') {
      // Для "All" показываем только первые 10 (основной грид)
      return galleryData.slice(0, 10);
    }
    // Для категорий — все фото этой категории
    return galleryData.filter(item => item.category === activeFilter);
  }, [activeFilter, galleryData]);

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
      if (direction === 'next') return (prev + 1) % filteredGallery.length;
      return (prev - 1 + filteredGallery.length) % filteredGallery.length;
    });
  }, [filteredGallery.length]);

  // Keyboard navigation
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
    <SectionContainer id="gallery">
      <ContentWrapper>
        <Overline>{t('gallery.overline', 'Gallery')}</Overline>
        <Title>{t('gallery.title', 'KAIF Experiences')}</Title>
        <Subtitle>
          {t('gallery.subtitle', 'Immerse yourself in the KAIF atmosphere through our photo gallery.')}
        </Subtitle>

        <FilterBar>
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              $active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterBar>

        <GalleryGrid key={activeFilter}>
          {filteredGallery.map((item, index) => (
            <GalleryItem
              key={item.id}
              onClick={() => openModal(index)}
              $delay={`${index * 0.06}s`}
            >
              <GalleryImage
                src={item.image}
                alt={item.title}
                loading="lazy"
                $position={item.position}
              />
              <ImageCaption>
                <CaptionTitle>{item.title}</CaptionTitle>
              </ImageCaption>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </ContentWrapper>

      {/* Lightbox Modal */}
      {modalOpen && filteredGallery[modalIndex] && (
        <ModalOverlay $visible={modalOpen} onClick={closeModal}>
          <CloseButton onClick={closeModal}>
            <XMarkIcon />
          </CloseButton>

          <ModalImageWrapper onClick={(e) => e.stopPropagation()}>
            {filteredGallery.length > 1 && (
              <ModalNavButton className="prev" onClick={() => navigateModal('prev')}>
                <ChevronLeftIcon />
              </ModalNavButton>
            )}

            <ModalImage
              src={filteredGallery[modalIndex].image}
              alt={filteredGallery[modalIndex].title}
            />

            {filteredGallery.length > 1 && (
              <ModalNavButton className="next" onClick={() => navigateModal('next')}>
                <ChevronRightIcon />
              </ModalNavButton>
            )}

            <ModalInfo>
              <ModalTitle>{filteredGallery[modalIndex].title}</ModalTitle>
              <ModalCounter>{modalIndex + 1} / {filteredGallery.length}</ModalCounter>
            </ModalInfo>
          </ModalImageWrapper>
        </ModalOverlay>
      )}
    </SectionContainer>
  );
};

export { GallerySection };
export default GallerySection;
