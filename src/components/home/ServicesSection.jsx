import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  FireIcon,
  BoltIcon,
  HeartIcon,
  BeakerIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ СЕКЦИЯ УСЛУГ - РАЗДЕЛЕНИЕ ПО ЗОНАМ
// =============================================================================

const ServicesContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  margin-top: 4rem;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme?.colors?.background || '#F5F3F0'} 0%,
    rgba(245, 243, 240, 0.8) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(232, 115, 74, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(144, 179, 167, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(74, 144, 184, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  background: linear-gradient(135deg, 
    ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'} 0%,
    ${({ theme }) => theme?.colors?.energy || '#E8734A'} 50%,
    ${({ theme }) => theme?.colors?.primary || '#90B3A7'} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  max-width: 600px;
  margin: 0 auto;
`;

// Зональные вкладки
const ZoneTabs = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const ZoneTab = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${({ $active, $zone }) => {
    if ($active) {
      return $zone === 'energy' 
        ? 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)'
        : 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
    }
    return 'rgba(255, 255, 255, 0.8)';
  }};
  color: ${({ $active, $zone, theme }) => {
    if ($active) return 'white';
    return $zone === 'energy' 
      ? (theme?.colors?.energy || '#E8734A')
      : (theme?.colors?.primary || '#90B3A7');
  }};
  border: 2px solid ${({ $zone, theme }) => 
    $zone === 'energy' 
      ? (theme?.colors?.energy || '#E8734A')
      : (theme?.colors?.primary || '#90B3A7')
  };
  border-radius: 50px;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $zone }) => 
      $zone === 'energy' 
        ? '0 10px 30px rgba(232, 115, 74, 0.3)'
        : '0 10px 30px rgba(144, 179, 167, 0.3)'
    };
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// Сетка услуг
const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ $zone }) => {
    switch($zone) {
      case 'fitness':
        return 'linear-gradient(135deg, rgba(232, 115, 74, 0.05) 0%, rgba(232, 115, 74, 0.02) 100%)';
      case 'combat':
        return 'linear-gradient(135deg, rgba(45, 91, 105, 0.05) 0%, rgba(45, 91, 105, 0.02) 100%)';
      case 'pool':
        return 'linear-gradient(135deg, rgba(74, 144, 184, 0.05) 0%, rgba(74, 144, 184, 0.02) 100%)';
      case 'spa':
        return 'linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(144, 179, 167, 0.02) 100%)';
      case 'restaurant':
        return 'linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(212, 165, 116, 0.02) 100%)';
      case 'banya':
        return 'linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(139, 69, 19, 0.02) 100%)';
      case 'sauna':
        return 'linear-gradient(135deg, rgba(139, 115, 85, 0.05) 0%, rgba(139, 115, 85, 0.02) 100%)';
      default:
        return 'rgba(255, 255, 255, 0.8)';
    }
  }};
  
  backdrop-filter: blur(20px);
  border: 1px solid ${({ $zone }) => {
    switch($zone) {
      case 'fitness':
        return 'rgba(232, 115, 74, 0.15)';
      case 'combat':
        return 'rgba(45, 91, 105, 0.15)';
      case 'pool':
        return 'rgba(74, 144, 184, 0.15)';
      case 'spa':
        return 'rgba(144, 179, 167, 0.15)';
      case 'restaurant':
        return 'rgba(212, 165, 116, 0.15)';
      case 'banya':
        return 'rgba(139, 69, 19, 0.15)';
      case 'sauna':
        return 'rgba(139, 115, 85, 0.15)';
      default:
        return 'rgba(144, 179, 167, 0.1)';
    }
  }};
  
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ $zone }) => {
      switch($zone) {
        case 'fitness':
        case 'combat':
        case 'pool':
          return 'linear-gradient(90deg, transparent, rgba(232, 115, 74, 0.1), transparent)';
        default:
          return 'linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.1), transparent)';
      }
    }};
    transition: left 0.6s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: ${({ $zone }) => {
      switch($zone) {
        case 'fitness':
          return '0 25px 50px rgba(232, 115, 74, 0.2)';
        case 'combat':
          return '0 25px 50px rgba(45, 91, 105, 0.2)';
        case 'pool':
          return '0 25px 50px rgba(74, 144, 184, 0.2)';
        case 'spa':
          return '0 25px 50px rgba(144, 179, 167, 0.2)';
        case 'restaurant':
          return '0 25px 50px rgba(212, 165, 116, 0.2)';
        case 'banya':
          return '0 25px 50px rgba(139, 69, 19, 0.2)';
        case 'sauna':
          return '0 25px 50px rgba(139, 115, 85, 0.2)';
        default:
          return '0 25px 50px rgba(144, 179, 167, 0.15)';
      }
    }};
    border-color: ${({ $zone }) => {
      switch($zone) {
        case 'fitness':
          return 'rgba(232, 115, 74, 0.3)';
        case 'combat':
          return 'rgba(45, 91, 105, 0.3)';
        case 'pool':
          return 'rgba(74, 144, 184, 0.3)';
        case 'spa':
          return 'rgba(144, 179, 167, 0.3)';
        case 'restaurant':
          return 'rgba(212, 165, 116, 0.3)';
        case 'banya':
          return 'rgba(139, 69, 19, 0.3)';
        case 'sauna':
          return 'rgba(139, 115, 85, 0.3)';
        default:
          return 'rgba(144, 179, 167, 0.2)';
      }
    }};
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ServiceIcon = styled.div`
  position: relative;
  z-index: 2;
  width: 4rem;
  height: 4rem;
  margin: 0 auto 2rem;
  background: ${({ $zone }) => {
    switch($zone) {
      case 'fitness':
        return 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)';
      case 'combat':
        return 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)';
      case 'pool':
        return 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)';
      case 'spa':
        return 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
      case 'restaurant':
        return 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)';
      case 'banya':
        return 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)';
      case 'sauna':
        return 'linear-gradient(135deg, #8B7355 0%, #A08866 100%)';
      default:
        return 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  transition: all 0.4s ease;
  flex-shrink: 0;
  
  /* Анимация для энергичных зон */
  ${({ $zone }) => ($zone === 'fitness' || $zone === 'combat' || $zone === 'pool') && `
    animation: energyPulse 3s ease-in-out infinite;
  `}
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) ${({ $zone }) => 
      ($zone === 'fitness' || $zone === 'combat') ? 'rotate(10deg)' : 'rotate(-5deg)'
    };
  }
`;

const ServiceTitle = styled.h3`
  position: relative;
  z-index: 2;
  font-family: ${({ $zone, theme }) => 
    ($zone === 'fitness' || $zone === 'combat') 
      ? (theme?.fonts?.strong || '"Oswald", sans-serif')
      : (theme?.fonts?.elegant || '"Playfair Display", serif')
  };
  font-size: ${({ $zone }) => ($zone === 'fitness' || $zone === 'combat') ? '1.25rem' : '1.5rem'};
  font-weight: ${({ $zone }) => ($zone === 'fitness' || $zone === 'combat') ? '600' : '600'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 1rem;
  text-transform: ${({ $zone }) => ($zone === 'fitness' || $zone === 'combat') ? 'uppercase' : 'none'};
  letter-spacing: ${({ $zone }) => ($zone === 'fitness' || $zone === 'combat') ? '0.05em' : '0'};
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  position: relative;
  z-index: 2;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ServiceFeatures = styled.ul`
  position: relative;
  z-index: 2;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ $zone }) => {
      switch($zone) {
        case 'fitness':
          return '#E8734A';
        case 'combat':
          return '#2D5B69';
        case 'pool':
          return '#4A90B8';
        case 'spa':
          return '#90B3A7';
        case 'restaurant':
          return '#D4A574';
        case 'beauty':
          return '#C8A8E9';
        case 'sauna':
          return '#8B7355';
        default:
          return '#90B3A7';
      }
    }};
    font-weight: bold;
  }
`;

const ServiceButton = styled(motion.button)`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ $zone }) => {
    switch($zone) {
      case 'fitness':
        return 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)';
      case 'combat':
        return 'linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)';
      case 'pool':
        return 'linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)';
      case 'spa':
        return 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
      case 'restaurant':
        return 'linear-gradient(135deg, #D4A574 0%, #E1B885 100%)';
      case 'banya':
        return 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)';
      case 'sauna':
        return 'linear-gradient(135deg, #8B7355 0%, #A08866 100%)';
      default:
        return 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
    }
  }};
  color: white;
  border: none;
  border-radius: 25px;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $zone }) => {
      switch($zone) {
        case 'fitness':
          return '0 6px 20px rgba(232, 115, 74, 0.4)';
        case 'combat':
          return '0 6px 20px rgba(45, 91, 105, 0.4)';
        case 'pool':
          return '0 6px 20px rgba(74, 144, 184, 0.4)';
        case 'spa':
          return '0 6px 20px rgba(144, 179, 167, 0.4)';
        case 'restaurant':
          return '0 6px 20px rgba(212, 165, 116, 0.4)';
        case 'banya':
          return '0 6px 20px rgba(139, 69, 19, 0.4)';
        case 'sauna':
          return '0 6px 20px rgba(139, 115, 85, 0.4)';
        default:
          return '0 6px 20px rgba(144, 179, 167, 0.4)';
      }
    }};
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;

// =============================================================================
// SERVICES SECTION COMPONENT
// =============================================================================

const ServicesSection = () => {
  const { t } = useTranslation();
  const [activeZone, setActiveZone] = useState('energy');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Зоны
  const zones = useMemo(() => [
    {
      id: 'energy',
      name: t('home.services.zones.activity'),
      icon: <BoltIcon />,
    },
    {
      id: 'relax',
      name: t('home.services.zones.relax'),
      icon: <HeartIcon />,
    }
  ], [t]);

  // Услуги по зонам
  const services = useMemo(() => ({
    energy: [
      {
        zone: 'fitness',
        icon: '💪',
        title: t('home.services.fitness.title'),
        description: t('home.services.fitness.description'),
        features: t('home.services.fitness.features', { returnObjects: true }),
        link: '/sports/gym'
      },
      {
        zone: 'combat',
        icon: '🥊',
        title: t('home.services.combat.title'),
        description: t('home.services.combat.description'),
        features: t('home.services.combat.features', { returnObjects: true }),
        link: '/sports/fight-club'
      },
      {
        zone: 'pool',
        icon: '🏊‍♀️',
        title: t('home.services.pool.title'),
        description: t('home.services.pool.description'),
        features: t('home.services.pool.features', { returnObjects: true }),
        link: '/sports/swimming-pool'
      }
    ],
    relax: [
      {
        zone: 'spa',
        icon: '🧘‍♀️',
        title: t('home.services.spa.title'),
        description: t('home.services.spa.description'),
        features: t('home.services.spa.features', { returnObjects: true }),
        link: '/spa'
      },
      {
        zone: 'banya',
        icon: '🔥',
        title: t('home.services.banya.title'),
        description: t('home.services.banya.description'),
        features: t('home.services.banya.features', { returnObjects: true }),
        link: '/banya'
      },
      {
        zone: 'restaurant',
        icon: '🍽️',
        title: t('home.services.restaurant.title'),
        description: t('home.services.restaurant.description'),
        features: t('home.services.restaurant.features', { returnObjects: true }),
        link: '/restaurant'
      }
    ]
  }), [t]);

  const currentServices = services[activeZone] || [];

  return (
    <ServicesContainer id="services">
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader>
            <SectionTitle variants={itemVariants}>
              {t('home.services.title')}
            </SectionTitle>
            <SectionSubtitle variants={itemVariants}>
              {t('home.services.subtitle')}
            </SectionSubtitle>
          </SectionHeader>

          {/* Зональные вкладки */}
          <ZoneTabs variants={itemVariants}>
            {zones.map((zone) => (
              <ZoneTab
                key={zone.id}
                $zone={zone.id}
                $active={activeZone === zone.id}
                onClick={() => setActiveZone(zone.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {zone.icon}
                {zone.name}
              </ZoneTab>
            ))}
          </ZoneTabs>

          {/* Сетка услуг */}
          <AnimatePresence mode="wait">
            <ServicesGrid
              key={activeZone}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {currentServices.map((service, index) => (
                <ServiceCard
                  key={`${activeZone}-${index}`}
                  $zone={service.zone}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ServiceIcon $zone={service.zone}>
                    {service.icon}
                  </ServiceIcon>
                  
                  <ServiceTitle $zone={service.zone}>
                    {service.title}
                  </ServiceTitle>
                  
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                  
                  <ServiceFeatures>
                    {service.features.map((feature, idx) => (
                      <ServiceFeature key={idx} $zone={service.zone}>
                        {feature}
                      </ServiceFeature>
                    ))}
                  </ServiceFeatures>
                  
                  <Link to={service.link}>
                    <ServiceButton
                      $zone={service.zone}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('home.services.learn_more')}
                      <ArrowRightIcon />
                    </ServiceButton>
                  </Link>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </AnimatePresence>
        </motion.div>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
