import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../components/ui/CommonComponents';

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#666'};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const PrivacyPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>{t('privacy.title')}</Title>
          
          <Content>
            <p>
              {t('privacy.intro')}
            </p>
            
            <h2>{t('privacy.collection.title')}</h2>
            <p>
              {t('privacy.collection.content')}
            </p>
            
            <h2>{t('privacy.usage.title')}</h2>
            <p>
              {t('privacy.usage.content')}
            </p>
            
            <h2>{t('privacy.protection.title')}</h2>
            <p>
              {t('privacy.protection.content')}
            </p>
            
            <h2>{t('privacy.contacts.title')}</h2>
            <p>
              {t('privacy.contacts.content')} 
              <br />
              {t('privacy.contacts.email')}
              <br />
              {t('privacy.contacts.phone')}
            </p>
          </Content>
        </motion.div>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPage; 