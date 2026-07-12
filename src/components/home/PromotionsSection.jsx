import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  TagIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/solid';
import BookingModal from '../booking/BookingModal';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ ПРОМО-АКЦИЙ
// =============================================================================

const PromotionsContainer = styled.section`
  position: relative;
  padding: 8rem 0;
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

const CountdownTimer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TimeBlock = styled.div`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  min-width: 80px;
`;

const TimeNumber = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const TimeLabel = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const PromotionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PromotionCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  background: #0f172a;
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 16px;
`;

const PromoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${PromotionCard}:hover & {
    transform: scale(1.05);
    background: #0f172a;
    color: white;
    border-color: #0f172a;
  }
`;

const PromoTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const PromoDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const PromoPrice = styled.div`
  margin-bottom: 2rem;
`;

const OldPrice = styled.span`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: #94a3b8;
  text-decoration: line-through;
  margin-right: 0.75rem;
`;

const NewPrice = styled.span`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
`;

const PromoFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const PromoFeature = styled.li`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: #0f172a;
    border-radius: 50%;
  }
  
  svg {
    position: absolute;
    left: 0.125rem;
    top: 0.625rem;
    width: 0.5rem;
    height: 0.5rem;
    color: white;
  }
`;

const PromoButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  width: 100%;
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

// =============================================================================
// PROMOTIONS SECTION COMPONENT
// =============================================================================

const PromotionsSection = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const handleBookClick = (promo) => {
    setSelectedPromo(promo);
    setIsBookingModalOpen(true);
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Промо-акции
  const promotions = [
    {
      badge: 'Популярное',
      icon: <StarIcon />,
      title: 'Безлимит фитнес',
      description: 'Неограниченный доступ к тренажерному залу, групповым тренировкам и бассейну. Персональная программа в подарок!',
      oldPrice: '6,000',
      newPrice: '3,990',
      currency: 'THB/мес',
      features: [
        'Все зоны фитнес-центра',
        'Групповые тренировки',
        'Персональная программа',
        'Доступ к бассейну',
        'Раздевалки premium'
      ],
      link: '/promotions/fitness-unlimited'
    },
    {
      badge: 'Новинка',
      icon: <StarIcon />,
      title: 'SPA-релакс пакет',
      description: 'Комплекс расслабляющих процедур: массаж, сауна, хаммам. Полное восстановление за один день.',
      oldPrice: '3,400',
      newPrice: '2,390',
      currency: 'THB',
      features: [
        'Тайский массаж 90 мин',
        'Финская сауна',
        'Турецкий хаммам',
        'Ароматерапия',
        'Травяной чай'
      ],
      link: '/promotions/spa-relax'
    },
    {
      badge: 'Ограничено',
      icon: <StarIcon />,
      title: 'Гастро-тур',
      description: 'Дегустационное меню из 5 кухонь мира. Авторские блюда от шеф-повара с винным сопровождением.',
      oldPrice: '2,600',
      newPrice: '1,800',
      currency: 'THB',
      features: [
        'Меню из 5 кухонь',
        'Винное сопровождение',
        'Авторские десерты',
        'Панорамная терраса',
        'Живая музыка'
      ],
      link: '/promotions/gastro-tour'
    }
  ];

  return (
    <PromotionsContainer>
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader>
            <SectionBadge variants={itemVariants}>
              <TagIcon />
              Специальные предложения
            </SectionBadge>
            
            <SectionTitle variants={itemVariants}>
              Выгодные предложения
            </SectionTitle>
            
            <SectionSubtitle variants={itemVariants}>
              Эксклюзивные скидки и выгодные пакеты услуг для наших гостей
            </SectionSubtitle>
          </SectionHeader>

          {/* Таймер обратного отсчета */}
          <CountdownTimer variants={itemVariants}>
            <TimeBlock>
              <TimeNumber>{timeLeft.days}</TimeNumber>
              <TimeLabel>Дней</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeNumber>{timeLeft.hours}</TimeNumber>
              <TimeLabel>Часов</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeNumber>{timeLeft.minutes}</TimeNumber>
              <TimeLabel>Минут</TimeLabel>
            </TimeBlock>
            <TimeBlock>
              <TimeNumber>{timeLeft.seconds}</TimeNumber>
              <TimeLabel>Секунд</TimeLabel>
            </TimeBlock>
          </CountdownTimer>

          {/* Промо карточки */}
          <PromotionsGrid>
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <PromotionCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <PromoBadge>
                    {promo.badge}
                  </PromoBadge>
                  
                  <PromoIcon>
                    {promo.icon}
                  </PromoIcon>
                  
                  <PromoTitle>
                    {promo.title}
                  </PromoTitle>
                  
                  <PromoDescription>
                    {promo.description}
                  </PromoDescription>
                  
                  <PromoPrice>
                    <OldPrice>{promo.oldPrice} {promo.currency}</OldPrice>
                    <NewPrice>
                      {promo.newPrice} {promo.currency}
                    </NewPrice>
                  </PromoPrice>
                  
                  <PromoFeatures>
                    {promo.features.map((feature, idx) => (
                      <PromoFeature key={idx}>
                        <CheckIcon />
                        {feature}
                      </PromoFeature>
                    ))}
                  </PromoFeatures>
                  
                  <PromoButton
                    as="button"
                    onClick={() => handleBookClick(promo)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Забронировать
                    <ArrowRightIcon />
                  </PromoButton>
                </PromotionCard>
              </motion.div>
            ))}
          </PromotionsGrid>
        </motion.div>
      </ContentWrapper>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedPromo?.title || 'Акция'}
        source="Home - Promotions"
      />
    </PromotionsContainer>
  );
};

export default PromotionsSection; 