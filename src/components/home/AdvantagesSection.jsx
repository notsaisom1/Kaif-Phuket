import React, { useRef, useMemo } from 'react';
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
  max-width: 600px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FacilityCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const StatNumber = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
`;

const StatUnit = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.35);
  margin-left: 0.15rem;
`;

const FacilityName = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #133238;
  margin: 1.25rem 0 0.75rem;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const FacilityDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.5);
  margin: 0;
  font-weight: 400;
`;

// Animated counter
const AnimatedCounter = ({ value, delay = 0 }) => {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = React.useState('0');
  const hasAnimated = useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const timer = setTimeout(() => {
            const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
            if (numericValue === 0) {
              setDisplayValue(value);
              return;
            }
            const duration = 1500;
            const steps = 45;
            const stepValue = numericValue / steps;
            let currentStep = 0;
            const counter = setInterval(() => {
              currentStep++;
              if (currentStep >= steps) {
                setDisplayValue(value);
                clearInterval(counter);
              } else {
                const currentValue = Math.floor(stepValue * currentStep);
                setDisplayValue(value.replace(/\d+/, currentValue.toString()));
              }
            }, duration / steps);
          }, delay);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

// Facilities data
const getFacilitiesData = (t) => [
  {
    id: 'gym',
    number: '70',
    unit: '+',
    name: t('facilities.gym.name', 'Тренажеров'),
    description: t('facilities.gym.description', 'Современное оборудование для эффективных тренировок')
  },
  {
    id: 'banya',
    number: '150',
    unit: 'm2',
    name: t('facilities.banya.name', 'Русская баня'),
    description: t('facilities.banya.description', 'Самая большая панорамная русская парная на Пхукете')
  },
  {
    id: 'restaurant',
    number: '200',
    unit: '',
    name: t('facilities.restaurant.name', 'Мест в ресторане'),
    description: t('facilities.restaurant.description', 'Ресторан на открытом воздухе')
  },
  {
    id: 'pool',
    number: '25',
    unit: t('facilities.pool.unit', 'м'),
    name: t('facilities.pool.name', 'Бассейн'),
    description: t('facilities.pool.description', 'Олимпийский стандарт для плавания')
  }
];

const AdvantagesSection = () => {
  const { t } = useTranslation();
  const facilitiesData = useMemo(() => getFacilitiesData(t), [t]);

  return (
    <SectionContainer id="facilities">
      <ContentWrapper>
        <Overline>{t('facilities.overline', 'Our Facilities')}</Overline>
        <Title>{t('facilities.title', 'Пространство для гармонии и саморазвития')}</Title>
        <Subtitle>{t('facilities.subtitle', 'Мы создаем пространство, где жизнь становится ярче')}</Subtitle>

        <FacilitiesGrid>
          {facilitiesData.map((facility, index) => (
            <FacilityCard key={facility.id}>
              <StatNumber>
                <AnimatedCounter value={facility.number} delay={index * 100} />
                {facility.unit && <StatUnit>{facility.unit}</StatUnit>}
              </StatNumber>
              <FacilityName>{facility.name}</FacilityName>
              <FacilityDescription>{facility.description}</FacilityDescription>
            </FacilityCard>
          ))}
        </FacilitiesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AdvantagesSection;
