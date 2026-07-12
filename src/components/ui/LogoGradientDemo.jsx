import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LogoGradientButton from './LogoGradientButton';
import LogoGradientHeading from './LogoGradientHeading';
import LogoGradientDivider from './LogoGradientDivider';

const DemoContainer = styled.div\`
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 0 auto;
\`;

const SectionTitle = styled.h3\`
  font-family: \${({ theme }) => theme?.fonts?.primary || 'Playfair Display, serif'};
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: \${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
\`;

const DemoSection = styled.div\`
  margin-bottom: 2rem;
\`;

const DemoCard = styled(motion.div)\`
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  margin-top: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  h4 {
    font-family: \${({ theme }) => theme?.fonts?.primary || 'Playfair Display, serif'};
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
  }
\`;

const GradientBorder = styled.div\`
  padding: 2px;
  border-radius: 14px;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  margin-top: 2rem;
  
  > div {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    
    h4 {
      font-family: \${({ theme }) => theme?.fonts?.primary || 'Playfair Display, serif'};
      font-size: 1.8rem;
      margin-top: 0;
      color: \${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
    }
    
    p {
      font-size: 1rem;
      line-height: 1.6;
      color: \${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
    }
  }
\`;

const ButtonsContainer = styled.div\`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
\`;

const LogoGradientDemo = () => {
  return (
    <DemoContainer>
      <LogoGradientHeading>Градиент из цветов логотипа KAIF</LogoGradientHeading>
      <p>Этот демонстрационный компонент показывает различные способы использования градиента, созданного из фирменных цветов логотипа KAIF.</p>
      <LogoGradientDivider width="120px" />
      
      <DemoSection>
        <SectionTitle>Кнопки с градиентом</SectionTitle>
        <ButtonsContainer>
          <LogoGradientButton>Забронировать</LogoGradientButton>
          <LogoGradientButton>Смотреть подробнее</LogoGradientButton>
        </ButtonsContainer>
      </DemoSection>
      
      <DemoSection>
        <SectionTitle>Заголовки с градиентным текстом</SectionTitle>
        <LogoGradientHeading size="2rem">СПА и Велнес</LogoGradientHeading>
        <LogoGradientHeading size="1.5rem">Фитнес и Бассейн</LogoGradientHeading>
      </DemoSection>
      
      <DemoSection>
        <SectionTitle>Разделители с градиентом</SectionTitle>
        <LogoGradientDivider width="200px" />
        <LogoGradientDivider width="150px" margin="1.5rem 0" />
        <LogoGradientDivider width="100px" />
      </DemoSection>
      
      <DemoSection>
        <SectionTitle>Карточки с градиентным фоном</SectionTitle>
        <DemoCard
          whileHover={{ translateY: -5 }}
          transition={{ duration: 0.3 }}
        >
          <h4>Премиум опыт KAIF</h4>
          <p>Откройте для себя уникальный мир релаксации и восстановления в нашем СПА-комплексе KAIF, где каждая деталь продумана для вашего комфорта.</p>
        </DemoCard>
      </DemoSection>
      
      <DemoSection>
        <SectionTitle>Границы с градиентом</SectionTitle>
        <GradientBorder>
          <div>
            <h4>Уникальные процедуры</h4>
            <p>Наш комплекс предлагает более 50 различных СПА и велнес процедур, разработанных специально для восстановления и омоложения.</p>
          </div>
        </GradientBorder>
      </DemoSection>
    </DemoContainer>
  );
};

export default LogoGradientDemo;
