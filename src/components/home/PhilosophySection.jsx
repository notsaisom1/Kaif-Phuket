import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RiHeartPulseFill, RiLeafFill, RiInfinityFill } from 'react-icons/ri';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FDFDFD;
  overflow: hidden;
  padding: 100px 0;
  box-sizing: border-box;
  color: #333;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, rgba(44, 97, 79, 0.02) 0%, transparent 70%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.25) 0%, rgba(168, 197, 184, 0.20) 100%);
    z-index: 0;
  }
`;

// Контейнер для содержимого
const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// Текстовый заголовок секции
const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 45px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  z-index: 1;
`;

// Обертка для карточек
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  margin-top: 30px;
  width: 100%;
  max-width: 1100px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

// Надзаголовок
const Tagline = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #FF6347; /* Оранжево-красный из логотипа */
  position: relative;
  margin-bottom: 12px;
  display: inline-block;
  padding: 5px 12px;
  background-color: rgba(255, 99, 71, 0.05);
  border-radius: 2px;
`;

// Заголовок
const Heading = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 300;
  line-height: 1.25;
  margin-bottom: 20px;
  color: #111;
  letter-spacing: -0.3px;
  max-width: 800px;
  
  strong {
    font-weight: 500;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
      opacity: 0.15;
      z-index: -1;
    }
  }
`;

// Краткое описание
const ShortDescription = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 40px;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  letter-spacing: 0.2px;
  padding: 15px 0;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    left: 50%;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    transform: translateX(-50%);
  }
  
  &:before {
    top: 0;
  }
  
  &:after {
    bottom: 0;
  }
`;

// Карточка принципа
const PrincipleCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 2px;
  border: 1px solid rgba(0, 180, 216, 0.05); /* Голубой из логотипа */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(255, 105, 180, 0.07); /* Розовый из логотипа */
    background-color: rgba(255, 255, 255, 0.9);
    border-color: rgba(0, 180, 216, 0.1); /* Голубой из логотипа */
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(44, 97, 79, 0.03) 0%, rgba(255, 255, 255, 0) 60%);
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: #2C614F;
    transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

// Иконка для карточки
const PrincipleIcon = styled(motion.div)`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(44, 97, 79, 0.03);
    border-radius: 50%;
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  svg {
    color: #2C614F;
    width: 28px;
    height: 28px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  ${PrincipleCard}:hover &:before {
    background: rgba(44, 97, 79, 0.08);
    transform: scale(1.15);
  }
  
  ${PrincipleCard}:hover & svg {
    transform: scale(1.1);
    color: #1A4F3D;
  }
`;

// Заголовок карточки
const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0 0 12px;
  color: #222;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

// Текст карточки
const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #777;
  margin: 0;
  font-weight: 300;
  max-width: 220px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

// Анимированный декоративный круг
const Circle = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, rgba(44, 97, 79, 0.03) 0%, rgba(44, 97, 79, 0.01) 100%);
  border-radius: 50%;
  z-index: 0;
  
  ${props => props.size && `
    width: ${props.size}px;
    height: ${props.size}px;
  `}
  
  ${props => props.position && `
    top: ${props.position.top};
    left: ${props.position.left};
    right: ${props.position.right};
    bottom: ${props.position.bottom};
  `}
`;

// Иконка для философии
const PhilosophyIcon = ({ name }) => {
  const icons = {
    wellness: <RiHeartPulseFill />,
    balance: <RiLeafFill />,
    holistic: <RiInfinityFill />
  };
  
  return icons[name] || null;
};

const PhilosophySection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  // Отслеживание появления секции в поле зрения
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Принципы философии KAIF
  const principles = [
    {
      name: 'wellness',
      title: 'Комфорт и вдохновение',
      text: 'Создаем атмосферу, где каждая тренировка приносит удовольствие'
    },
    {
      name: 'balance',
      title: 'Баланс и гармония',
      text: 'Премиальный сервис для равновесия тела и духа'
    },
    {
      name: 'holistic',
      title: 'Целостный подход',
      text: 'Все зоны KAIF работают вместе для вашего благополучия'
    }
  ];
  
  // Варианты анимации для заголовков
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
    }
  };
  
  // Варианты анимации для карточек с поочередным появлением
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };
  
  // Варианты анимации для иконок
  const iconVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 } 
    }
  };
  
  return (
    <SectionContainer id="philosophy" ref={sectionRef}>
      {/* Декоративные элементы */}
      <Circle 
        size={300} 
        position={{ top: '-150px', right: '-100px' }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
      />
      <Circle 
        size={200} 
        position={{ bottom: '-50px', left: '-100px' }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
        <ContentContainer>
          <SectionHeader
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <Tagline as={motion.div}>{t('home.philosophy.overline')}</Tagline>
            <Heading as={motion.h2} dangerouslySetInnerHTML={{ __html: t('home.philosophy.title') }} />
            <ShortDescription as={motion.div}>{t('home.philosophy.paragraph1')}</ShortDescription>
          </SectionHeader>
          
          <CardGrid>
            <AnimatePresence>
              {principles.map((principle, index) => (
                <PrincipleCard
                  key={principle.name}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <PrincipleIcon
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={iconVariants}
                    whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.6 } }}
                  >
                    <PhilosophyIcon name={principle.name} />
                  </PrincipleIcon>
                  <CardTitle>{principle.title}</CardTitle>
                  <CardText>{principle.text}</CardText>
                </PrincipleCard>
              ))}
            </AnimatePresence>
          </CardGrid>
        </ContentContainer>
    </SectionContainer>
  );
};

export default PhilosophySection;
