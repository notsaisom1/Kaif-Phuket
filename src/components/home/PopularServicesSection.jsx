import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { getSpaData } from '../spa/data/spaData';

const PopularSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.03) 0%, rgba(168, 197, 184, 0.02) 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.heading};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #7A8A7D;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.1);
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(144, 179, 167, 0.15);
  }
`;

const ServiceIcon = styled.div`
  height: 120px;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    height: 100px;
    font-size: 2rem;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ServicePrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #90B3A7;
  margin-bottom: 0.5rem;
`;

const ServiceCategory = styled.div`
  font-size: 0.85rem;
  color: #7A8A7D;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ViewAllButton = styled(motion.create(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 0 auto;
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  
  &:hover {
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
    text-decoration: none;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PopularServicesSection = () => {
  const { t } = useTranslation();
  const spaData = getSpaData(t);
  const { categories, getPopularServices } = spaData;
  
  // Получаем популярные услуги (максимум 6)
  const popularServices = getPopularServices().slice(0, 6);

  // Функция для форматирования цены
  const formatPrice = (service) => {
    if (service.durations && service.prices) {
      return `${t('common.from')} ${Math.min(...service.prices)} ฿`;
    } else if (service.priceFrom && service.priceTo) {
      return `${service.priceFrom} - ${service.priceTo} ฿`;
    } else if (service.priceFrom) {
      return `${t('common.from')} ${service.priceFrom} ฿`;
    } else {
      return `${service.price} ฿`;
    }
  };

  return (
    <PopularSection>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('popular_services.title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('popular_services.subtitle')}
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {popularServices.map((service, index) => {
            const categoryData = categories.find(cat => cat.id === service.category);
            
            return (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <PopularBadge>{t('popular_services.hit')}</PopularBadge>
                
                <ServiceIcon bgColor={categoryData?.color}>
                  {categoryData?.icon}
                </ServiceIcon>
                
                <ServiceContent>
                  <ServiceCategory>{categoryData?.name}</ServiceCategory>
                  <ServiceName>{service.name}</ServiceName>
                  <ServicePrice>{formatPrice(service)}</ServicePrice>
                </ServiceContent>
              </ServiceCard>
            );
          })}
        </ServicesGrid>

        <ButtonContainer>
          <ViewAllButton
            to="/spa"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('popular_services.view_all')}
            <ArrowLongRightIcon />
          </ViewAllButton>
        </ButtonContainer>
      </SectionContainer>
    </PopularSection>
  );
};

export default PopularServicesSection; 