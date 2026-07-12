import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background-color: ${({ theme }) => theme?.colors?.background || '#F5F3F0'};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/pattern-light.png');
    background-size: 500px;
    background-repeat: repeat;
    opacity: 0.05;
    z-index: 0;
  }
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Заголовок секции
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1px;
    background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    margin-right: 1rem;
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1px;
    background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    margin-left: 1rem;
  }
`;

// Основной заголовок
const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0 0 1.5rem;
`;

// Подзаголовок
const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  max-width: 700px;
  margin: 0 auto;
`;

// Таймер обратного отсчета
const CountdownContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0 5rem;
  
  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

// Блок времени (дни, часы и т.д.)
const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Число в таймере
const TimeNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 0.5rem;
`;

// Подпись к числу
const TimeLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
`;

// Сетка с предложениями
const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Карточка предложения
const OfferCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme?.shadows?.sm || '0 1px 3px 0 rgba(0, 0, 0, 0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'};
  }
`;

// Изображение предложения
const OfferImage = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${OfferCard}:hover & img {
    transform: scale(1.05);
  }
`;

// Бейдж с категорией
const OfferBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background-color: ${({ $type, theme }) => {
    switch ($type) {
      case 'popular':
        return theme?.colors?.energy || '#E8734A';
      case 'new':
        return theme?.colors?.primary || '#90B3A7';
      case 'limited':
        return theme?.colors?.secondary || '#D4A574';
      default:
        return theme?.colors?.primary || '#90B3A7';
    }
  }};
  border-radius: 2px;
`;

// Контент карточки
const OfferContent = styled.div`
  padding: 2rem;
`;

// Название предложения
const OfferName = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0 0 1rem;
`;

// Описание предложения
const OfferDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin: 0 0 1.5rem;
`;

// Блок с ценой
const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Старая цена
const OldPrice = styled.span`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

// Текущая цена
const CurrentPrice = styled.span`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.energy || '#E8734A'};
`;

// Кнопка бронирования
const BookButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.75rem 0;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme?.colors?.text?.white || '#FFFFFF'};
  background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  border: none;
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => {
      const color = theme?.colors?.primary || '#90B3A7';
      return color.replace(/rgb\((\d+), (\d+), (\d+)\)/, (_, r, g, b) => 
        `rgb(${Math.max(0, parseInt(r) - 20)}, ${Math.max(0, parseInt(g) - 20)}, ${Math.max(0, parseInt(b) - 20)})`
      );
    }};
  }
`;

// Список включенных услуг
const IncludedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

// Элемент списка
const IncludedItem = styled.li`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin: 0 0 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  }
`;

// Данные о предложениях
const offersData = [
  {
    id: 'fitness',
    name: 'Безлимит фитнес',
    description: 'Неограниченный доступ к тренажерному залу, групповым тренировкам и бассейну.',
    oldPrice: '5,000 ТНВ/мес',
    currentPrice: '3,990 ТНВ/мес',
    image: '/images/offers/fitness.jpg',
    badge: 'popular',
    included: [
      'Все зоны фитнес-центра',
      'Групповые тренировки',
      'Персональная программа',
      'Доступ к бассейну',
      'Раздевалки premium'
    ]
  },
  {
    id: 'spa',
    name: 'СПА-релакс пакет',
    description: 'Комплекс расслабляющих процедур: массаж, сауна, хаммам. Полное восстановление за один день.',
    oldPrice: '3,400 ТНВ',
    currentPrice: '2,390 ТНВ',
    image: '/images/offers/spa.jpg',
    badge: 'new',
    included: [
      'Тайский массаж 90 мин',
      'Финская сауна',
      'Турецкий хаммам',
      'Ароматерапия',
      'Травяной чай'
    ]
  },
  {
    id: 'gastro',
    name: 'Гастро-тур',
    description: 'Дегустационное меню из 5 кухонь мира. Авторские блюда от шеф-повара с винным сопровождением.',
    oldPrice: '2,500 ТНВ',
    currentPrice: '1,800 ТНВ',
    image: '/images/offers/gastro.jpg',
    badge: 'limited',
    included: [
      'Меню из 5 кухонь',
      'Винное сопровождение',
      'Авторские десерты',
      'Панорамная терраса',
      'Живая музыка'
    ]
  }
];

const SpecialOffers = () => {
  const { t } = useTranslation();
  const [countdown, setCountdown] = React.useState({
    days: 7,
    hours: 23,
    minutes: 44,
    seconds: 59
  });
  
  // Эффект для таймера обратного отсчета
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Анимации при появлении
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <SectionContainer id="special-offers">
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {t('offers.overline')}
          </Overline>
          
          <Title
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {t('offers.title')}
          </Title>
          
          <Subtitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {t('offers.subtitle')}
          </Subtitle>
        </SectionHeader>
        
        <CountdownContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <TimeBlock>
            <TimeNumber>{countdown.days}</TimeNumber>
            <TimeLabel>{t('offers.days')}</TimeLabel>
          </TimeBlock>
          
          <TimeBlock>
            <TimeNumber>{countdown.hours}</TimeNumber>
            <TimeLabel>{t('offers.hours')}</TimeLabel>
          </TimeBlock>
          
          <TimeBlock>
            <TimeNumber>{countdown.minutes}</TimeNumber>
            <TimeLabel>{t('offers.minutes')}</TimeLabel>
          </TimeBlock>
          
          <TimeBlock>
            <TimeNumber>{countdown.seconds}</TimeNumber>
            <TimeLabel>{t('offers.seconds')}</TimeLabel>
          </TimeBlock>
        </CountdownContainer>
        
        <OffersGrid>
          {offersData.map((offer, index) => (
            <OfferCard
              key={offer.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <OfferImage>
                <img src={offer.image} alt={offer.name} />
                <OfferBadge $type={offer.badge}>{t(`offers.badges.${offer.badge}`)}</OfferBadge>
              </OfferImage>
              
              <OfferContent>
                <OfferName>{offer.name}</OfferName>
                <OfferDescription>{offer.description}</OfferDescription>
                
                <PriceBlock>
                  <OldPrice>{offer.oldPrice}</OldPrice>
                  <CurrentPrice>{offer.currentPrice}</CurrentPrice>
                </PriceBlock>
                
                <IncludedList>
                  {offer.included.map((item, idx) => (
                    <IncludedItem key={idx}>{item}</IncludedItem>
                  ))}
                </IncludedList>
                
                <BookButton to="/booking">{t('offers.bookNow')}</BookButton>
              </OfferContent>
            </OfferCard>
          ))}
        </OffersGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SpecialOffers;
