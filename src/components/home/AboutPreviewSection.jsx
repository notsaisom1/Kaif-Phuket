import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  CheckBadgeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ О НАС
// =============================================================================

const AboutContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: #ffffff;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.01) 0%, transparent 50%);
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const AboutContent = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const AboutBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`;

const AboutDescription = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 2.5rem;
  font-weight: 400;
  max-width: 500px;
  
  @media (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

// Статистики
const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  line-height: 1.3;
`;

// Кнопка CTA
const CTAButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.2);
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

// Особенности комплекса
const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #475569;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.05);
    background: #0f172a;
    color: white;
    border-color: #0f172a;
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const FeatureDesc = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// =============================================================================
// ABOUT PREVIEW SECTION COMPONENT
// =============================================================================

const AboutPreviewSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  // Stats
  const stats = useMemo(() => [
    { number: '50m2', label: t('home.about.stats.banya') },
    { number: '70+', label: t('home.about.stats.equipment') },
    { number: '50+', label: t('home.about.stats.dishes') },
    { number: '25м', label: t('home.about.stats.pool') },
  ], [t]);

  // Особенности комплекса
  const features = useMemo(() => [
    {
      icon: <SparklesIcon />,
      title: t('home.about.features.spa.title'),
      description: t('home.about.features.spa.description')
    },
    {
      icon: <BuildingOffice2Icon />,
      title: t('home.about.features.gym.title'),
      description: t('home.about.features.gym.description')
    },
    {
      icon: <UserGroupIcon />,
      title: t('home.about.features.martial.title'),
      description: t('home.about.features.martial.description')
    },
    {
      icon: <BuildingOffice2Icon />,
      title: t('home.about.features.pool.title'),
      description: t('home.about.features.pool.description')
    },
    {
      icon: <SparklesIcon />,
      title: t('home.about.features.restaurant.title'),
      description: t('home.about.features.restaurant.description')
    },
    {
      icon: <SparklesIcon />,
      title: t('home.about.features.beauty.title'),
      description: t('home.about.features.beauty.description')
    }
  ], [t]);

  return (
    <AboutContainer>
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutGrid>
            {/* Content */}
            <AboutContent>
              <AboutBadge variants={itemVariants}>
                <CheckBadgeIcon />
                {t('home.about.badge')}
              </AboutBadge>
              
              <AboutTitle variants={itemVariants} dangerouslySetInnerHTML={{ __html: t('home.about.title') }} />
              
              <AboutDescription variants={itemVariants}>
                {t('home.about.description1')}
              </AboutDescription>
              
              <AboutDescription variants={itemVariants}>
                {t('home.about.description2')}
              </AboutDescription>

              {/* Статистики */}
              <StatsGrid variants={itemVariants}>
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </StatsGrid>

              {/* Кнопка удалена, так как страница "О нас" больше не существует */}
            </AboutContent>

            {/* Features Grid */}
            <FeaturesGrid>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FeatureCard
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>
                    <FeatureTitle>
                      {feature.title}
                    </FeatureTitle>
                    <FeatureDesc>{feature.description}</FeatureDesc>
                  </FeatureCard>
                </motion.div>
              ))}
            </FeaturesGrid>
          </AboutGrid>
        </motion.div>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutPreviewSection; 