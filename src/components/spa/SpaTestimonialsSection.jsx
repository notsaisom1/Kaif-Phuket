import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// =============================================================================
// ОПТИМИЗИРОВАННАЯ СЕКЦИЯ ОТЗЫВОВ SPA
// =============================================================================

const TestimonialsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #fdfcfb 0%,
    #f8f6f3 100%
  );
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: #5A6B5D;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem 2.5rem;
  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(144, 179, 167, 0.1);
  text-align: center;
  margin: 0 1rem;
  border: 1px solid rgba(144, 179, 167, 0.05);
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Star = styled(StarIcon)`
  width: 24px;
  height: 24px;
  color: #D4A574;
`;

const TestimonialText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: #5A6B5D;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5A6B5D;
  margin: 0;
`;

const AuthorTitle = styled.p`
  font-size: 0.95rem;
  color: #7A8A7D;
  margin: 0;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(144, 179, 167, 0.1);
  border: 2px solid rgba(144, 179, 167, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    color: #90B3A7;
  }
  
  &:hover {
    background: #90B3A7;
    border-color: #90B3A7;
    
    svg {
      color: white;
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Dot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#90B3A7' : 'rgba(144, 179, 167, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #90B3A7;
  }
`;

const SpaTestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: t('spa.testimonials.reviews.1.text', 'Потрясающий опыт! Тайский массаж был невероятно расслабляющим, а атмосфера просто волшебная. Обязательно вернусь снова.'),
      author: t('spa.testimonials.reviews.1.author', 'Анна Петрова'),
      title: t('spa.testimonials.reviews.1.title', 'Постоянный клиент'),
      rating: 5
    },
    {
      id: 2,
      text: t('spa.testimonials.reviews.2.text', 'Профессиональные мастера, качественные процедуры и внимание к деталям. Это лучший СПА центр, который я посещала в Пхукете.'),
      author: t('spa.testimonials.reviews.2.author', 'Екатерина Сидорова'),
      title: t('spa.testimonials.reviews.2.title', 'Гость из Москвы'),
      rating: 5
    },
    {
      id: 3,
      text: t('spa.testimonials.reviews.3.text', 'Прекрасное место для отдыха и восстановления. Особенно понравилась финская сауна и джакузи. Рекомендую всем!'),
      author: t('spa.testimonials.reviews.3.author', 'Михаил Волков'),
      title: t('spa.testimonials.reviews.3.title', 'Резидент KAIF'),
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <TestimonialsSection>
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('spa.testimonials.title', 'Отзывы наших гостей')}
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('spa.testimonials.subtitle', 'Узнайте, что говорят о нас наши довольные клиенты')}
        </SectionSubtitle>

        <TestimonialsContainer>
          <TestimonialCard
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <StarsContainer>
              {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                <Star key={index} />
              ))}
            </StarsContainer>

            <TestimonialText>
              "{testimonials[currentTestimonial].text}"
            </TestimonialText>

            <TestimonialAuthor>
              <AuthorName>{testimonials[currentTestimonial].author}</AuthorName>
              <AuthorTitle>{testimonials[currentTestimonial].title}</AuthorTitle>
            </TestimonialAuthor>
          </TestimonialCard>

          <NavigationContainer>
            <NavButton
              onClick={prevTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeftIcon />
            </NavButton>

            <DotsContainer>
              {testimonials.map((_, index) => (
                <Dot
                  key={index}
                  active={currentTestimonial === index}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </DotsContainer>

            <NavButton
              onClick={nextTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRightIcon />
            </NavButton>
          </NavigationContainer>
        </TestimonialsContainer>
      </SectionContainer>
    </TestimonialsSection>
  );
};

export default SpaTestimonialsSection;
