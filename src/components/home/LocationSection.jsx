import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
  TruckIcon,
  BuildingOfficeIcon,
  MapIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ ЛОКАЦИИ
// =============================================================================

const LocationContainer = styled.section`
  position: relative;
  padding: 8rem 0 4rem;
  background: white;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(92, 184, 72, 0.08); /* Зеленый из логотипа с прозрачностью */
  border: 1px solid rgba(92, 184, 72, 0.15); /* Зеленый бордер */
  border-radius: 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #5CB848; /* Зеленый из логотипа */
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #5CB848; /* Зеленый из логотипа */
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  background: #ffffff;
  border: 1px solid rgba(255, 99, 71, 0.1); /* Оранжево-красный из логотипа */
  border-radius: 16px;
  padding: 2rem 1.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(255, 99, 71, 0.15); /* Оранжево-красный с прозрачностью */
    border-color: rgba(255, 99, 71, 0.2);
    
    &::before {
      transform: scaleY(1);
    }
  }
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 99, 71, 0.08); /* Оранжево-красный с прозрачностью */
  border: 1px solid rgba(255, 99, 71, 0.15); /* Оранжево-красный бордер */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF6347; /* Оранжево-красный из логотипа */
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.4s ease;
  }
  
  ${InfoCard}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`;

const ContactButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid rgba(255, 99, 71, 0.2); /* Оранжево-красный бордер */
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  font-weight: 500;
  color: #FF6347; /* Оранжево-красный */
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    svg {
      transform: translateX(2px);
    }
  }
`;

const MapContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  min-height: 400px;
  background: #f1f5f9;
  border-radius: 16px;
  overflow: hidden;
`;

// ИСПРАВЛЕНИЕ БЕЗОПАСНОСТИ: Убираем хардкодный API токен
const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// Упрощенная карта-плейсхолдер с безопасным токеном
const Map = styled.div`
  width: 100%;
  height: 100%;
  background: ${mapboxToken ? 
    `url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/98.3,7.9,12,0/800x600?access_token=${mapboxToken}')` :
    'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
  };
  background-size: cover;
  background-position: center;
  filter: saturate(0.7);
  position: relative;
  
  ${!mapboxToken && `
    &::after {
      content: '🗺️ Карта недоступна\\AНеобходим API токен Mapbox';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: pre-line;
      text-align: center;
      color: #64748b;
      font-size: 1rem;
      font-weight: 500;
    }
  `}
`;

// Анимации для элементов
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const LocationSection = () => {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <LocationContainer id="location">
      <ContentWrapper>
        <SectionHeader
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionBadge
            variants={fadeInUp}
          >
            <MapPinIcon />
            {t('location.badge')}
          </SectionBadge>
          
          <SectionTitle
            variants={fadeInUp}
          >
            {t('location.title')}
          </SectionTitle>
          
          <SectionSubtitle
            variants={fadeInUp}
          >
            {t('location.subtitle')}
          </SectionSubtitle>
        </SectionHeader>
        
        <LocationGrid>
          <InfoSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <InfoCard variants={fadeInRight}>
              <CardIcon>
                <BuildingOfficeIcon />
              </CardIcon>
              <CardTitle>{t('location.addressTitle')}</CardTitle>
              <CardContent>
                <InfoItem>
                  <MapPinIcon />
                  {t('location.address')}
                </InfoItem>
                <InfoItem>
                  <GlobeAltIcon />
                  {t('location.region')}
                </InfoItem>
                <InfoItem>
                  <MapIcon />
                  {t('location.landmark')}
                </InfoItem>
                <ContactButton>
                  {t('location.directions')}
                  <ArrowTopRightOnSquareIcon />
                </ContactButton>
              </CardContent>
            </InfoCard>
            
            <InfoCard variants={fadeInRight}>
              <CardIcon>
                <ClockIcon />
              </CardIcon>
              <CardTitle>{t('location.hoursTitle')}</CardTitle>
              <CardContent>
                <InfoItem>
                  <CalendarDaysIcon />
                  {t('location.workdays')}
                </InfoItem>
                <InfoItem>
                  <CalendarDaysIcon />
                  {t('location.weekend')}
                </InfoItem>
                <InfoItem>
                  <InformationCircleIcon />
                  {t('location.holiday')}
                </InfoItem>
              </CardContent>
            </InfoCard>
            
            <InfoCard variants={fadeInRight}>
              <CardIcon>
                <PhoneIcon />
              </CardIcon>
              <CardTitle>{t('location.contactTitle')}</CardTitle>
              <CardContent>
                <InfoItem>
                  <PhoneIcon />
                  {t('location.phone')}
                </InfoItem>
                <InfoItem>
                  <GlobeAltIcon />
                  {t('location.email')}
                </InfoItem>
                <InfoItem>
                  <TruckIcon />
                  {t('location.delivery')}
                </InfoItem>
                <ContactButton>
                  {t('location.book')}
                  <ArrowTopRightOnSquareIcon />
                </ContactButton>
              </CardContent>
            </InfoCard>
          </InfoSection>
          
          <MapContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <Map />
          </MapContainer>
        </LocationGrid>
      </ContentWrapper>
    </LocationContainer>
  );
};

export default LocationSection;
