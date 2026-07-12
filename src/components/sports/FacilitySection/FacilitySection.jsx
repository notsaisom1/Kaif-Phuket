import React, { useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserGroupIcon, 
  SparklesIcon,
  CheckIcon,
  UsersIcon,
  MapPinIcon,
  StarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

import {
  SportFacility,
  FacilityTitle,
  FacilityDescription,
  FacilityGallery,
  GalleryImage,
  FacilityFeature,
  FacilityMeta,
  FacilityMetaItem,
  FacilityButtonContainer,
  ScheduleContainer,
  ScheduleHeader,
  BookScheduleButton,
  ScheduleNote,
  ScheduleWrapper,
  ScheduleActions,
  ScheduleFilterContainer,
  ScheduleFilterButton,
  FilterLabel,
  ScheduleGrid,
  ScheduleCard,
  ScheduleTime,
  ClassTitle,
  ClassInfo,
  ClassTag,
  ClassTags,
  NoClassesMessage,
  ClassHeader,
  ClassTime,
  ClassInstructor,
  ClassLocation
} from './FacilityStyles';

import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer, TopRightShape, BookButton } from '../../../styles/sports/CommonStyles';

// Используем ленивую загрузку изображений
const gymImages = [
  '/images/sports/gym/gym-1.jpg',
  '/images/sports/gym/gym-2.jpg', 
  '/images/sports/gym/gym-3.jpg'
];

const fightImages = [
  '/images/sports/fight-club/fight-1.jpg',
  '/images/sports/fight-club/fight-2.jpg',
  '/images/sports/fight-club/fight-3.jpg'
];

const danceImage = '/images/hero/hero-fitness.jpg';

// Компонент для ленивой загрузки изображений
const LazyImage = ({ src, alt, ...props }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <GalleryImage
      src={hasError ? '/placeholder-image.jpg' : src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      {...props}
    />
  );
};

const FacilitySection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Section>
      <TopRightShape 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <ContentContainer>
        <div style={{ textAlign: 'center' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.facilities.tag', 'Наши объекты')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{
              __html: t('sports.facilities.title', 'Современные <span>спортивные</span> пространства')
            }}
          />
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.facilities.subtitle', 'KAIF предлагает широкий выбор премиальных спортивных пространств с передовым оборудованием и профессиональными тренерами, которые помогут вам достичь ваших фитнес-целей.')}
          </SectionSubtitle>
        </div>
        
        {/* Тренажерный зал */}
        <SportFacility
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="facility-content">
            <FacilityTitle>{t('sports.facilities.gym.title', 'Тренажерный зал')}</FacilityTitle>
            
            <FacilityMeta>
              <FacilityMetaItem>
                <ClockIcon />
                <span>{t('sports.facilities.gym.hours', '07:00 - 21:00')}</span>
              </FacilityMetaItem>
              
              <FacilityMetaItem>
                <UserGroupIcon />
                <span>{t('sports.facilities.gym.capacity', 'До 40 человек')}</span>
              </FacilityMetaItem>
            </FacilityMeta>
            
            <FacilityDescription>
              <p>{t('sports.facilities.gym.description1', 'Наш тренажерный зал оснащен современным оборудованием премиум-класса от ведущих производителей. Здесь вы найдете все необходимое для эффективных тренировок - от свободных весов до кардиотренажеров последнего поколения.')}</p>
              <p>{t('sports.facilities.gym.description2', 'Просторное помещение с панорамными окнами создает идеальную атмосферу для тренировок, а профессиональные тренеры всегда готовы помочь составить индивидуальную программу.')}</p>
            </FacilityDescription>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.gym.feature1', 'Премиальное оборудование Technogym и Life Fitness')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.gym.feature2', 'Зона функционального тренинга')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.gym.feature3', 'Индивидуальные тренировки с сертифицированными тренерами')}</span>
              </FacilityFeature>
            </motion.div>
            
            <FacilityButtonContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ marginTop: '2rem' }}
              >
                <BookButton
                  as="a"
                  href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20тренажерном%20зале%20KAIF"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('sports.facilities.book_button', 'Забронировать тренировку')}
                  <CalendarIcon style={{ width: '18px', height: '18px' }} />
                </BookButton>
              </motion.div>
            </FacilityButtonContainer>
          </div>
          
          <div className="facility-gallery">
            <FacilityGallery>
              <LazyImage 
                src={gymImages[0]}
                alt="Тренажерный зал"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <LazyImage 
                src={gymImages[1]}
                alt="Тренажерный зал"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <LazyImage 
                src={gymImages[2]}
                alt="Тренажерный зал"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </FacilityGallery>
          </div>
        </SportFacility>
        
        {/* Бойцовский клуб */}
        <SportFacility
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="facility-content">
            <FacilityTitle>{t('sports.facilities.fight.title', 'Бойцовский клуб')}</FacilityTitle>
            
            <FacilityMeta>
              <FacilityMetaItem>
                <ClockIcon />
                <span>{t('sports.facilities.fight.hours', '07:00 - 21:00')}</span>
              </FacilityMetaItem>
              
              <FacilityMetaItem>
                <UserGroupIcon />
                <span>{t('sports.facilities.fight.capacity', 'До 25 человек')}</span>
              </FacilityMetaItem>
            </FacilityMeta>
            
            <FacilityDescription>
              <p>{t('sports.facilities.fight.description1', 'Бойцовский клуб KAIF — это современное пространство для тренировок по различным видам единоборств. Профессиональный ринг, груши, мешки, и специальное покрытие создают идеальные условия как для новичков, так и для опытных бойцов.')}</p>
              <p>{t('sports.facilities.fight.description2', 'Наши тренеры — опытные бойцы и чемпионы, которые помогут освоить технику и достичь высоких результатов в выбранном боевом искусстве.')}</p>
            </FacilityDescription>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.fight.feature1', 'Профессиональный боксерский ринг')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.fight.feature2', 'Тренировки по боксу, тайскому боксу, джиу-джитсу')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.fight.feature3', 'Тренеры с международными сертификатами')}</span>
              </FacilityFeature>
            </motion.div>
            
            <FacilityButtonContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ marginTop: '2rem' }}
              >
                <BookButton
                  as="a"
                  href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20бойцовском%20клубе%20KAIF"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('sports.facilities.book_button', 'Забронировать тренировку')}
                  <CalendarIcon style={{ width: '18px', height: '18px' }} />
                </BookButton>
              </motion.div>
            </FacilityButtonContainer>
          </div>
          
          <div className="facility-gallery">
            <FacilityGallery>
              <LazyImage 
                src={fightImages[0]}
                alt="Бойцовский клуб"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <LazyImage 
                src={fightImages[1]}
                alt="Бойцовский клуб"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <LazyImage 
                src={fightImages[2]}
                alt="Бойцовский клуб"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </FacilityGallery>
          </div>
        </SportFacility>
        
        {/* Танцевальная студия */}
        <SportFacility
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="facility-content">
            <FacilityTitle>{t('sports.facilities.dance.title', 'Танцевальная студия')}</FacilityTitle>
            
            <FacilityMeta>
              <FacilityMetaItem>
                <ClockIcon />
                <span>{t('sports.facilities.dance.hours', '07:00 - 21:00')}</span>
              </FacilityMetaItem>
              
              <FacilityMetaItem>
                <UserGroupIcon />
                <span>{t('sports.facilities.dance.capacity', 'До 30 человек')}</span>
              </FacilityMetaItem>
            </FacilityMeta>
            
            <FacilityDescription>
              <p>{t('sports.facilities.dance.description1', 'Просторная танцевальная студия с профессиональным покрытием, зеркальными стенами и передовой аудиосистемой создает идеальные условия для различных танцевальных направлений и групповых занятий.')}</p>
              <p>{t('sports.facilities.dance.description2', 'Здесь проходят занятия по современным и классическим танцевальным направлениям, а также групповые фитнес-тренировки под руководством опытных инструкторов.')}</p>
            </FacilityDescription>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.dance.feature1', 'Профессиональное танцевальное покрытие')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.dance.feature2', 'Широкий выбор танцевальных направлений')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.dance.feature3', 'Групповые и индивидуальные занятия')}</span>
              </FacilityFeature>
              
              <FacilityFeature variants={itemVariants}>
                <SparklesIcon />
                <span>{t('sports.facilities.dance.feature4', 'Гибкое расписание групповых и индивидуальных занятий')}</span>
              </FacilityFeature>
            </motion.div>
            
            <FacilityButtonContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ marginTop: '2rem' }}
              >
                <BookButton
                  as="a"
                  href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20танцевальные%20занятия%20в%20KAIF"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('sports.facilities.book_button', 'Забронировать тренировку')}
                  <CalendarIcon style={{ width: '18px', height: '18px' }} />
                </BookButton>
              </motion.div>
            </FacilityButtonContainer>
          </div>
          
          <div className="facility-gallery">
            <FacilityGallery>
              <LazyImage 
                src={danceImage}
                alt="Танцевальная студия"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                style={{
                  gridColumn: '1 / -1',
                  gridRow: '1 / -1'
                }}
              />
            </FacilityGallery>
          </div>
        </SportFacility>
      </ContentContainer>
    </Section>
  );
};

export default FacilitySection;
